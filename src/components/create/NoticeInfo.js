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
 * @params {number} params.saveState
 * @params {object} params.setData
 */
export default function NoticeInfo(params) {
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
				<Row>
					<Col>
						<InputGroup>
							<FormControl
								as="textarea"
								placeholder="자가용보다 대중교통이 편리해요와 같이 전하고 싶은 내용을 작성해 주세요. 또는, 마무리 말씀을 써주셔도 돼요^^! * 150자 이내"
								rows={12}
								{...register("notice.text")}
							></FormControl>
						</InputGroup>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
