import React from "react"
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap"
import styled from "styled-components"

const Wrapper = styled.div`
	h5 {
		height: 100%;
		line-height: 200%;
		margin: 0;
		vertical-align: middle;
	}
`

/**
 * @params {object} params
 * @params {boolean} params.show
 */
export default function DateInfo(params) {
	return (
		<Wrapper>
			<Container
				style={{
					display: params.show ? "block" : "none",
				}}
			>
				<Row className="mb-2">
					<Col xs={2}></Col>
					<Col xs={3}>
						<InputGroup>
							<FormControl placeholder="2021"></FormControl>
						</InputGroup>
					</Col>
					<Col xs={4}>
						<h5>년</h5>
					</Col>
				</Row>
				<Row className="mb-2">
					<Col xs={2}></Col>
					<Col xs={3}>
						<InputGroup>
							<FormControl placeholder="10"></FormControl>
						</InputGroup>
					</Col>
					<Col xs={4}>
						<h5>월</h5>
					</Col>
				</Row>
				<Row className="mb-2">
					<Col xs={2}></Col>
					<Col xs={3}>
						<InputGroup>
							<FormControl placeholder="2"></FormControl>
						</InputGroup>
					</Col>
					<Col xs={4}>
						<h5>일</h5>
					</Col>
				</Row>
				<Row className="mb-2">
					<Col xs={2}></Col>
					<Col xs={3}>
						<InputGroup>
							<FormControl placeholder="13"></FormControl>
						</InputGroup>
					</Col>
					<Col xs={4}>
						<h5>시</h5>
					</Col>
				</Row>
				<Row>
					<Col xs={2}></Col>
					<Col xs={3}>
						<InputGroup>
							<FormControl placeholder="0"></FormControl>
						</InputGroup>
					</Col>
					<Col xs={4}>
						<h5>분</h5>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
