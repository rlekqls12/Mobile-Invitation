import React from "react"
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import styled from "styled-components"

const Wrapper = styled.div``

/**
 * @params {object} params
 * @params {boolean} params.show
 * @params {object} params.setData
 */
export default function PersonalInfo(params) {
	const { register, getValues } = useForm()

	React.useEffect(() => {
		if (!params.show) {
			params.setData((prev) => ({
				...prev,
				...getValues(),
			}))
		}
	}, [params.show])

	return (
		<Wrapper>
			<Container
				style={{
					display: params.show ? "block" : "none",
				}}
			>
				<Row className="mb-5">
					<Col>
						<Row className="mb-2">
							<Col>
								<h4>연락처</h4>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<InputGroup>
									<InputGroup.Text>신랑님</InputGroup.Text>
									<FormControl placeholder="'-'없이 입력해주세요."></FormControl>
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<InputGroup>
									<InputGroup.Text>신부님</InputGroup.Text>
									<FormControl placeholder="'-'없이 입력해주세요."></FormControl>
								</InputGroup>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col>
						<Row className="mb-2">
							<Col>
								<h4>신랑측</h4>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<InputGroup>
									<InputGroup.Text>은행</InputGroup.Text>
									<FormControl placeholder=""></FormControl>
								</InputGroup>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<InputGroup>
									<InputGroup.Text>계좌번호</InputGroup.Text>
									<FormControl placeholder=""></FormControl>
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<InputGroup>
									<InputGroup.Text>예금주</InputGroup.Text>
									<FormControl placeholder=""></FormControl>
								</InputGroup>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col>
						<Row className="mb-2">
							<Col>
								<h4>신부측</h4>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<InputGroup>
									<InputGroup.Text>은행</InputGroup.Text>
									<FormControl placeholder=""></FormControl>
								</InputGroup>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<InputGroup>
									<InputGroup.Text>계좌번호</InputGroup.Text>
									<FormControl placeholder=""></FormControl>
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<InputGroup>
									<InputGroup.Text>예금주</InputGroup.Text>
									<FormControl placeholder=""></FormControl>
								</InputGroup>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
