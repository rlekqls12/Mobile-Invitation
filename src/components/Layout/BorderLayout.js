import React from "react"
import styled from "styled-components"
import Footer from "../Footer"
import Header from "../Header"

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 99vh;
	margin: 0.5vh 5vw;
	padding: 1vh 1vw;
	overflow-y: auto;
	border: 2px solid black;
	border-radius: 0.2vw;
`

/**
 * @param {object} props
 * @param {?any} props.children
 */
export default function BorderLayout(props) {
	const [step, setStep] = React.useState(0)

	return (
		<Wrapper>
			<Header
				title="가족정보"
				step={{
					now: step,
					end: 7,
				}}
			/>
			{props.children}
			<Footer />
		</Wrapper>
	)
}