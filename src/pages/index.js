import React from "react"
import {
	Button,
	Col,
	Container,
	FormControl,
	InputGroup,
	Row,
} from "react-bootstrap"
import BaseLayout from "../components/Layout/BaseLayout"
import styled from "styled-components"
import { inputPhone } from "../lib/helper"

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100vh;
	margin: 0 5vw;

	.login-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 40vh;
		max-height: 70vw;
		margin-top: auto 0;
		border: 2px solid black;
		border-radius: 0.6vw;

		.header-title {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 25px;
			color: black;
			font-size: 42px;
			background-color: white;
			transform: translateY(-50%);
		}

		.input-wrapper {
			margin: auto 0;
		}
	}
`

const Index = () => {
	return (
		<BaseLayout>
			<Wrapper>
				<div className="login-wrapper">
					<div className="header-title">모바일 청접장</div>
					<Container className="input-wrapper">
						<Row className="d-flex flex-column align-items-center">
							<Col xs={10} sm={8} md={6}>
								<InputGroup>
									<InputGroup.Text>전화번호</InputGroup.Text>
									<FormControl
										placeholder="010-0000-0000"
										type="tel"
										onInput={inputPhone}
									></FormControl>
								</InputGroup>
							</Col>
							<Col xs={10} sm={8} md={6} className="mt-2">
								<InputGroup>
									<InputGroup.Text>비밀번호</InputGroup.Text>
									<FormControl type="password"></FormControl>
								</InputGroup>
							</Col>
							<Col xs={10} sm={8} md={6} className="mt-4">
								<Button className="w-100">로그인</Button>
							</Col>
						</Row>
					</Container>
				</div>
			</Wrapper>
		</BaseLayout>
	)
}

export default Index
