import React from "react"
import {
	Col,
	Container,
	Dropdown,
	FormControl,
	InputGroup,
	Row,
} from "react-bootstrap"
import styled from "styled-components"

const Wrapper = styled.div``

/**
 * @params {object} params
 * @params {boolean} params.show
 */
export default function FamilyInfo(params) {
	return (
		<Wrapper>
			<Container
				style={{
					display: params.show ? "block" : "none",
				}}
			>
				<Row className="mb-5">
					<Col xs={4}>
						<h4>신랑측</h4>
					</Col>
					<Col xs={8}>
						<Row className="mb-3">
							<Col>
								<InputGroup>
									<InputGroup.Text>아버님</InputGroup.Text>
									<FormControl placeholder="홍길동"></FormControl>
								</InputGroup>
							</Col>
							<Col>
								<InputGroup>
									<InputGroup.Text>어머님</InputGroup.Text>
									<FormControl placeholder="홍길동"></FormControl>
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<InputGroup>
									<InputGroup.Text>신랑</InputGroup.Text>
									<FormControl placeholder="홍길동"></FormControl>
								</InputGroup>
							</Col>
							<Col>
								<Dropdown>
									<Dropdown.Toggle>관계 (선택)</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item>장남</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col xs={4}>
						<h4>신부측</h4>
					</Col>
					<Col xs={8}>
						<Row className="mb-3">
							<Col>
								<InputGroup>
									<InputGroup.Text>아버님</InputGroup.Text>
									<FormControl placeholder="홍길동"></FormControl>
								</InputGroup>
							</Col>
							<Col>
								<InputGroup>
									<InputGroup.Text>어머님</InputGroup.Text>
									<FormControl placeholder="홍길동"></FormControl>
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<InputGroup>
									<InputGroup.Text>신부</InputGroup.Text>
									<FormControl placeholder="홍길동"></FormControl>
								</InputGroup>
							</Col>
							<Col>
								<Dropdown>
									<Dropdown.Toggle>관계 (선택)</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item>막내</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
