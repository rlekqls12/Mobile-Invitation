import React from "react"
import styled from "styled-components"
import HeaderInput from "../components/headerInput"

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: inherit;
	/* height: inherit; */

	.login-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 70vw;
		height: 37.5vw;
		margin-top: 15vh;
		border: 0.2vw solid black;
		border-radius: 0.6vw;

		.header-title {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1.5vw;
			color: black;
			font-size: 3vw;
			background-color: white;
			transform: translateY(-50%);
		}

		.input-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			height: 100%;
		}
	}
`

export default function Index() {
	return (
		<Wrapper>
			<div className="login-wrapper">
				<div className="header-title">모바일 청접장</div>
				<div className="input-wrapper">
					<HeaderInput placeholder={"전화번호"} />
					<HeaderInput placeholder={"비밀번호"} />
				</div>
			</div>
		</Wrapper>
	)
}
