import React from "react"
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap"
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

	p.sample {
		font-size: 20px;
		text-align: right;
		text-decoration: underline;
		color: orange;
		cursor: pointer;
	}
`

/**
 * @params {object} params
 * @params {boolean} params.show
 * @params {object} params.setData
 */
export default function AphorismInfo(params) {
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
				<Row className="mb-4">
					<Col>
						<InputGroup>
							<FormControl
								as="textarea"
								placeholder="150자 이내로 작성해주세요 ^^"
								rows={12}
							></FormControl>
						</InputGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className="sample">글귀 샘플문구 보기</p>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
