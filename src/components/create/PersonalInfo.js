import React from "react"
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { convertInputPhone } from "../../lib/helper"

const Wrapper = styled.div``

/**
 * @params {object} params
 * @params {boolean} params.show
 * @params {number} params.saveState
 * @params {object} params.setData
 */
export default function PersonalInfo(params) {
	const { register, getValues, setValue } = useForm()

	const handleInputPhone = (e, key) => {
		if (e && e?.target?.value !== undefined) {
			const convertValue = convertInputPhone(e, getValues(key))
			setValue(key, convertValue, {
				shouldValidate: true,
				shouldDirty: true,
			})
		}
	}

	const handleInputManPhone = (e) => {
		handleInputPhone(e, "personal.man.phone")
	}

	const handleInputWomanPhone = (e) => {
		handleInputPhone(e, "personal.woman.phone")
	}

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
				<Row className="mb-5">
					<Col>
						<Row>
							<Col sm={3}>
								<h4>신랑측</h4>
							</Col>
							<Col sm={9}>
								<Row>
									<Col xs={12} className="mb-3">
										<InputGroup>
											<InputGroup.Text>연락처</InputGroup.Text>
											<FormControl
												placeholder="010-0000-0000"
												type="tel"
												{...register("personal.man.phone")}
												onChange={handleInputManPhone}
												maxLength={13}
											></FormControl>
										</InputGroup>
									</Col>
									<Col xs={12} className="mb-3">
										<InputGroup>
											<InputGroup.Text>은행</InputGroup.Text>
											<FormControl
												placeholder=""
												{...register("personal.man.bank")}
											></FormControl>
										</InputGroup>
									</Col>
									<Col xs={12} className="mb-3">
										<InputGroup>
											<InputGroup.Text>계좌번호</InputGroup.Text>
											<FormControl
												placeholder=""
												{...register("personal.man.account.number")}
											></FormControl>
										</InputGroup>
									</Col>
									<Col xs={12}>
										<InputGroup>
											<InputGroup.Text>예금주</InputGroup.Text>
											<FormControl
												placeholder=""
												{...register("personal.man.account.holder")}
											></FormControl>
										</InputGroup>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col>
						<Row>
							<Col sm={3}>
								<h4>신부측</h4>
							</Col>
							<Col sm={9}>
								<Row>
									<Col xs={12} className="mb-3">
										<InputGroup>
											<InputGroup.Text>연락처</InputGroup.Text>
											<FormControl
												placeholder="010-0000-0000"
												type="tel"
												{...register("personal.woman.phone")}
												onChange={handleInputWomanPhone}
												maxLength={13}
											></FormControl>
										</InputGroup>
									</Col>
									<Col xs={12} className="mb-3">
										<InputGroup>
											<InputGroup.Text>은행</InputGroup.Text>
											<FormControl
												placeholder=""
												{...register("personal.woman.bank")}
											></FormControl>
										</InputGroup>
									</Col>
									<Col xs={12} className="mb-3">
										<InputGroup>
											<InputGroup.Text>계좌번호</InputGroup.Text>
											<FormControl
												placeholder=""
												{...register("personal.woman.account.number")}
											></FormControl>
										</InputGroup>
									</Col>
									<Col xs={12}>
										<InputGroup>
											<InputGroup.Text>예금주</InputGroup.Text>
											<FormControl
												placeholder=""
												{...register("personal.woman.account.holder")}
											></FormControl>
										</InputGroup>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
