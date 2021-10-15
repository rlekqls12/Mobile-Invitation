import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
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
 * @params {number} params.saveState
 * @params {object} params.setData
 */
export default function MultimediaInfo(params) {
	const { register, getValues } = useForm()

	React.useEffect(() => {
		params.setData((prev) => ({
			...prev,
			...getValues(),
		}))
	}, [params.saveState])

	return (
		<Wrapper>
			<Container
				style={{
					display: params.show ? "block" : "none",
				}}
			>
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
							<h3>사진</h3>
							<h5 style={{ marginTop: "50%" }}>
								이 곳을 클릭하거나, 사진을 드래그해서 업로드해주세요.
							</h5>
						</Card>
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
							<h3>영상</h3>
							<h5 style={{ marginTop: "50%" }}>
								이 곳을 클릭하거나, 영상을 드래그해서 업로드해주세요.
							</h5>
						</Card>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
