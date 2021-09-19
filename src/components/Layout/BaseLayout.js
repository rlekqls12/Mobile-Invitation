import React from "react"
import styled from "styled-components"
import { Mobile, Desktop } from "../MediaQuery"

const Wrapper = styled.div`
	.mobile_container {
		width: 100%;
		height: 100vh;
		overflow-x: hidden;
	}
	.desktop_container {
		width: 770px;
		height: 100vh;
		margin: 0 auto;
	}
`

const BaseLayout = (props) => {
	const { children } = props
	return (
		<Wrapper>
			<Mobile>
				<div className="mobile_container">{children}</div>
			</Mobile>
			<Desktop>
				<div className="desktop_container">{children}</div>
			</Desktop>
		</Wrapper>
	)
}

export default BaseLayout
