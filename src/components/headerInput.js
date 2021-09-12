import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
	position: relative;

	input {
		padding: 0.59vw;
		border: 0.1vw solid black;
		border-radius: 0.2vw;
		font-size: ${({ fontSize }) =>
			fontSize
				? fontSize + (typeof fontSize === "number" ? "px" : "")
				: "1.2vw"};
	}

	.placeholder {
		position: absolute;
		top: 0;
		margin: 0.59vw 0;
		margin-left: 0.59vw;
		font-size: ${({ fontSize }) =>
			fontSize
				? fontSize + (typeof fontSize === "number" ? "px" : "")
				: "1.2vw"};
		color: gray;
		transition: all 0.1s ease-in-out;
	}

	/* input:not(:placeholder-shown) + .placeholder, */
	input:hover + .placeholder,
	input:valid + .placeholder,
	input:focus + .placeholder {
		top: -0.95vw;
		padding: 0 0.3vw;
		font-size: ${({ fontSize }) =>
			fontSize
				? fontSize + (typeof fontSize === "number" ? "px" : "")
				: "0.8vw"};
		color: black;
		background-color: white;
	}

	input:not(:focus):not(:valid):hover + .placeholder {
		color: gray;
	}
`

/**
 * @param {object & React.HTMLAttributes<HTMLInputElement>} props
 * @param {React.CSSProperties} props.style
 * @param {React.CSSProperties} props.placeholderStyle
 * @param {string|number} props.fontSize
 * @param {string|number} props.placeHolderFontSize
 * @param {string} props.placeholder
 */
export default function HeaderInput(props) {
	return (
		<Wrapper
			fontSize={props.fontSize}
			placeHolderFontSize={props.placeHolderFontSize}
		>
			<input style={props.style || {}} required></input>
			<div className="placeholder">{props.placeholder}</div>
		</Wrapper>
	)
}
