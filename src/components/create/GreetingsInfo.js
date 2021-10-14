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
`

/**
 * @params {object} params
 * @params {boolean} params.show
 * @params {object} params.setData
 */
export default function GreetingsInfo(params) {
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
				<Row>
					<Col>
						<InputGroup>
							<FormControl
								as="textarea"
								placeholder="소개하실 글을 적어주세요!"
								rows={12}
							></FormControl>
						</InputGroup>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
