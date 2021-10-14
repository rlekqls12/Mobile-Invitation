import React from "react"
import {
	Col,
	Container,
	Form,
	FormControl,
	InputGroup,
	Row,
} from "react-bootstrap"
import { useForm } from "react-hook-form"
import styled from "styled-components"

const Wrapper = styled.div``

/**
 * @params {object} params
 * @params {boolean} params.show
 * @params {object} params.setData
 */
export default function FamilyInfo(params) {
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
					<Col xs={4}>
						<h4>신랑측</h4>
					</Col>
					<Col xs={8}>
						<Row className="mb-1">
							<Col>
								<InputGroup>
									<InputGroup.Text>아버님</InputGroup.Text>
									<FormControl {...register("man.father.name")} />
								</InputGroup>
							</Col>
							<Col>
								<InputGroup>
									<InputGroup.Text>어머님</InputGroup.Text>
									<FormControl {...register("man.mother.name")} />
								</InputGroup>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<InputGroup
									size="sm"
									className="justify-content-end"
									ref={register("man.father.notExist").ref}
								>
									<InputGroup.Text>부재</InputGroup.Text>
									<InputGroup.Checkbox
										{...register("man.father.notExist")}
										ref={null}
									/>
								</InputGroup>
							</Col>
							<Col>
								<InputGroup
									size="sm"
									className="justify-content-end"
									ref={register("man.mother.notExist").ref}
								>
									<InputGroup.Text>부재</InputGroup.Text>
									<InputGroup.Checkbox
										{...register("man.mother.notExist")}
										ref={null}
									/>
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<InputGroup>
									<InputGroup.Text>신랑</InputGroup.Text>
									<FormControl {...register("man.name")} />
								</InputGroup>
							</Col>
							<Col>
								<InputGroup>
									<InputGroup.Text>관계</InputGroup.Text>
									<Form.Select {...register("man.type")}>
										<option value="son">아들</option>
										<option value="1st">장남</option>
										<option value="2nd">차남</option>
										<option value="3th">삼남</option>
										<option value="4th">사남</option>
										<option value="5th">오남</option>
										<option value="6th">육남</option>
										<option value="7th">칠남</option>
										<option value="last">막내</option>
										<option value="nephew">조카</option>
										<option value="grandson">손자</option>
										<option value="brother">동생</option>
									</Form.Select>
								</InputGroup>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col xs={4}>
						<h4>신부측</h4>
					</Col>
					<Col xs={8}>
						<Row className="mb-1">
							<Col>
								<InputGroup>
									<InputGroup.Text>아버님</InputGroup.Text>
									<FormControl {...register("woman.father.name")} />
								</InputGroup>
							</Col>
							<Col>
								<InputGroup>
									<InputGroup.Text>어머님</InputGroup.Text>
									<FormControl {...register("woman.mother.name")} />
								</InputGroup>
							</Col>
						</Row>
						<Row className="mb-3">
							<Col>
								<InputGroup
									size="sm"
									className="justify-content-end"
									ref={register("woman.father.notExist").ref}
								>
									<InputGroup.Text>부재</InputGroup.Text>
									<InputGroup.Checkbox
										{...register("woman.father.notExist")}
										ref={null}
									/>
								</InputGroup>
							</Col>
							<Col>
								<InputGroup
									size="sm"
									className="justify-content-end"
									ref={register("woman.mother.notExist").ref}
								>
									<InputGroup.Text>부재</InputGroup.Text>
									<InputGroup.Checkbox
										{...register("woman.mother.notExist")}
										ref={null}
									/>
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<InputGroup>
									<InputGroup.Text>신부</InputGroup.Text>
									<FormControl {...register("woman.name")} />
								</InputGroup>
							</Col>
							<Col>
								<InputGroup>
									<InputGroup.Text>관계</InputGroup.Text>
									<Form.Select {...register("woman.type")}>
										<option value="daughter">딸</option>
										<option value="1st">장녀</option>
										<option value="2nd">차녀</option>
										<option value="3th">삼녀</option>
										<option value="4th">사녀</option>
										<option value="5th">오녀</option>
										<option value="6th">육녀</option>
										<option value="7th">칠녀</option>
										<option value="last">막내</option>
										<option value="nephew">조카</option>
										<option value="granddaughter">손녀</option>
										<option value="brother">동생</option>
									</Form.Select>
								</InputGroup>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	)
}
