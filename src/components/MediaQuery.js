import React from "react"
import { useMediaQuery } from "react-responsive"

function useMounted() {
	const [mouted, setMouted] = React.useState(false)

	React.useEffect(() => {
		setMouted(true)
	}, [])

	return mouted
}

const Mobile = ({ children }) => {
	const mounted = useMounted()

	const isMobile = useMediaQuery({
		query: "(max-width:767px)",
	})
	return <React.Fragment>{mounted && isMobile && children}</React.Fragment>
}

const Desktop = ({ children }) => {
	const mounted = useMounted()

	const isPc = useMediaQuery({
		query: "(min-width:768px) ",
	})
	return <React.Fragment>{mounted && isPc && children}</React.Fragment>
}

export { Mobile, Desktop }
