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
	padding: 2vh 2vw;
	overflow-y: hidden;
	border: 2px solid black;
	border-radius: 0.2vw;
	background-color: white;

	div.content {
		overflow-y: auto;
		padding-bottom: 50vh;

		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		&::-webkit-scrollbar {
			display: none; /* Chrome, Safari, Opera*/
		}
	}
`

/**
 * @param {object} props
 * @param {!string} props.title
 * @param {!number} props.step
 * @param {!number} props.lastStep
 * @param {?(state) => void} props.onClick
 * @param {?JSX.Element} props.children
 */
export default function BorderLayout(props) {
	return (
		<Wrapper>
			<Header
				title={props.title}
				step={{
					now: props.step,
					end: props.lastStep,
				}}
			/>
			<div className="content">{props.children}</div>
			<Footer onClick={props.onClick} />
		</Wrapper>
	)
}
