import React from "react"
import { hot } from "react-hot-loader/root"
import { QueryClientProvider } from "react-query"
import { isDesktop, isMobile } from "react-device-detect"
import { BrowserRouter, Switch, Route } from "react-router-dom"
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

function DynamicRoutes() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Switch>
					<Route
						path="/"
						render={({ history, location, match }) => {
							const Page = React.lazy(() => {
								let pathArr = location.pathname.substr(1).split("/")
								let dynamicPathArr = createDynamicPath(pathArr)
								let importFunction = createImportFunction(dynamicPathArr)
								return importFunction()
							})

							return (
								<React.Suspense fallback={<></>}>
									<Page
										history={history}
										location={location}
										match={match}
										isDesktop={isDesktop}
										isMobile={isMobile}
									/>
								</React.Suspense>
							)
						}}
					/>
				</Switch>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default process.env.NODE_ENV === "development"
	? hot(DynamicRoutes)
	: DynamicRoutes
