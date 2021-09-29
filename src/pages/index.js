import React from "react"
import {
	Button,
	Col,
	Container,
	FormControl,
	InputGroup,
	Row,
} from "react-bootstrap"
import styled from "styled-components"
import { useHistory } from "react-router"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { convertInputPhone, uuid } from "../lib/helper"

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100vh;
	margin: 0 5vw;

	.login-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 40vh;
		max-height: 70vw;
		margin-top: auto 0;
		border: 2px solid black;
		border-radius: 0.6vw;

		.header-title {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 25px;
			color: black;
			font-size: 42px;
			background-color: white;
			transform: translateY(-50%);
		}

		.input-wrapper {
			margin: auto 0;
		}
	}
`

export default function Index() {
	const history = useHistory()

	const validateSchema = Yup.object().shape({
		phone: Yup.string().required("전화번호를 입력해주세요."),
		password: Yup.string().required("비밀번호를 입력해주세요."),
	})

	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		formState: { errors },
	} = useForm({ resolver: yupResolver(validateSchema) })

	const validateText = (name) => {
		const text = errors[name]?.message
		return (
			<div
				style={{
					width: "100%",
					maxHeight: text ? "40px" : "0px",
					textAlign: "right",
					color: "red",
					fontSize: "12px",
					transition: "all 300ms ease-in-out",
				}}
			>
				{text}
			</div>
		)
	}

	const handleInputPhone = (e) => {
		if (e && e?.target?.value !== undefined) {
			const convertValue = convertInputPhone(e, getValues("phone"))
			setValue("phone", convertValue, {
				shouldValidate: true,
				shouldDirty: true,
			})
		}
	}

	const onSubmit = () => {
		history.push("/create/" + uuid(42))
	}

	return (
		<Wrapper>
			<div className="login-wrapper">
				<div className="header-title">모바일 청접장</div>
				<Container className="input-wrapper">
					<Row className="d-flex flex-column align-items-center">
						<Col xs={10} sm={8} md={6}>
							<InputGroup>
								<InputGroup.Text>전화번호</InputGroup.Text>
								<FormControl
									placeholder="010-0000-0000"
									type="tel"
									{...register("phone")}
									onChange={handleInputPhone}
									maxLength={13}
								></FormControl>
							</InputGroup>
							{validateText("phone")}
						</Col>
						<Col xs={10} sm={8} md={6} className="mt-2">
							<InputGroup>
								<InputGroup.Text>비밀번호</InputGroup.Text>
								<FormControl
									type="password"
									{...register("password")}
								></FormControl>
							</InputGroup>
							{validateText("password")}
						</Col>
						<Col xs={10} sm={8} md={6} className="mt-4">
							<Button className="w-100" onClick={handleSubmit(onSubmit)}>
								로그인
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</Wrapper>
	)
}
