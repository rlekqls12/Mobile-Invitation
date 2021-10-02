import React from "react"
import {
	Button,
	Card,
	Col,
	Container,
	FormControl,
	InputGroup,
	Row,
} from "react-bootstrap"
import styled from "styled-components"

const Wrapper = styled.div`
	h3,
	h5 {
		height: 100%;
		line-height: 200%;
		margin: 0;
		vertical-align: middle;
		word-break: keep-all;
		text-align: center;
	}
`

/**
 * @params {object} params
 * @params {boolean} params.show
 */
export default function LocationInfo(params) {
	return (
		<Wrapper>
			<Container
				style={{
					display: params.show ? "block" : "none",
				}}
			>
				<Row className="mb-4">
					<Col>
						<InputGroup>
							<InputGroup.Text>예식장명</InputGroup.Text>
							<FormControl placeholder="ㅁㅁ 예식장"></FormControl>
						</InputGroup>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col>
						<InputGroup>
							<InputGroup.Text>상세주소</InputGroup.Text>
							<FormControl placeholder="상세주소"></FormControl>
						</InputGroup>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col xs={9} sm={10}>
						<InputGroup>
							<InputGroup.Text>주소</InputGroup.Text>
							<FormControl placeholder="주소"></FormControl>
						</InputGroup>
					</Col>
					<Col>
						<Button>검색</Button>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col>
						<Card
							style={{
								display: "flex",
								alignItems: "center",
								height: "0",
								paddingBottom: "100%",
							}}
						>
							<h3>지도</h3>
							<h5 style={{ marginTop: "50%" }}>
								검색을 눌러 위치를 찾아주세요.
							</h5>
						</Card>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col>
						<InputGroup>
							<InputGroup.Text>오시는 길</InputGroup.Text>
							<FormControl
								as="textarea"
								placeholder="오시는 길"
								rows={4}
							></FormControl>
						</InputGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card
							style={{
								display: "flex",
								alignItems: "center",
								height: "0",
								paddingBottom: "100%",
							}}
						>
							<h3>약도</h3>
							<h5 style={{ marginTop: "50%" }}>클릭해서 약도 업로드</h5>
						</Card>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
