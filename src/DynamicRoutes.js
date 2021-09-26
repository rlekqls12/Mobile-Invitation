import React from "react"
import { hot } from "react-hot-loader/root"
import { QueryClientProvider } from "react-query"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import BaseLayout from "./components/Layout/BaseLayout"
import { queryClient } from "./lib/query-client"

function createDynamicPath(arr, path = "") {
	if (arr.length === 0) return path

	let pathArr = []
	pathArr = pathArr.concat(createDynamicPath(arr.slice(1), `${path}/${arr[0]}`))
	pathArr = pathArr.concat(createDynamicPath(arr.slice(1), `${path}/_`))

	return pathArr
}

function createImportFunction(pathArr) {
	return pathArr.reduceRight(
		(nextImportFunc, path) => () =>
			import("./pages" + path).catch((e) => {
				if (/not find module/.test(e.message)) {
					return nextImportFunc()
				}
				if (/Loading chunk \d+ failed/.test(e.message)) {
					window.location.reload()
					return
				}
				throw e
			}),
		() => import("./pages/404"),
	)
}

function loadComponent(url) {
	const pathArr = url
		.replace(/\/{1,}/g, "/")
		.substr(1)
		.split("/")
	const dynamicPathArr = createDynamicPath(pathArr)
	const importFunction = createImportFunction(dynamicPathArr)
	return importFunction().then((module) => module.default)
}

function AsyncComponent({ history, location, match }) {
	const [Component, setComponenet] = React.useState(null)

	React.useEffect(() => {
		let unmounted = false

		loadComponent(history.location.pathname)
			.then((component) => {
				if (unmounted) {
					return
				}
				setComponenet(() => component)
			})
			.catch((e) => {
				if (!unmounted) {
					setComponenet(null)
				}
				throw e
			})

		return () => {
			setComponenet(null)
			unmounted = true
		}
	}, [history.location.pathname, history.location.search])

	return Component ? (
		React.createElement(Component, {
			history: history,
			location: location,
			match: match,
		})
	) : (
		<></>
	)
}

function DynamicRoutes() {
	return (
		<Route
			path="/"
			render={(props) => (
				<BaseLayout>
					<AsyncComponent {...props} />
				</BaseLayout>
			)}
		/>
	)
}

function Index() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Switch>
					<DynamicRoutes />
				</Switch>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default process.env.NODE_ENV === "development" ? hot(Index) : Index
