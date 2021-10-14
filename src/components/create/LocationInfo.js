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

function useFindAddress() {
	const [address, setAddress] = React.useState("")

	const addressInputProps = {
		value: address,
		onChange: (e) => {
			if (e?.target?.value) setAddress(e.target.value)
		},
	}

	const findAddress = () => {
		alert("주소 찾기 (" + address + ")")
	}

	return { addressInputProps, findAddress }
}

/**
 * @params {object} params
 * @params {boolean} params.show
 * @params {object} params.setData
 */
export default function LocationInfo(params) {
	const { register, getValues } = useForm()
	const { addressInputProps, findAddress } = useFindAddress()

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
							<InputGroup.Text>날짜</InputGroup.Text>
							<FormControl type="date" {...register("date.date")}></FormControl>
							<InputGroup.Text>시간</InputGroup.Text>
							<FormControl type="time" {...register("date.time")}></FormControl>
						</InputGroup>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col>
						<InputGroup>
							<InputGroup.Text>예식장명</InputGroup.Text>
							<FormControl {...register("weddinghall.name")}></FormControl>
						</InputGroup>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col>
						<InputGroup>
							<InputGroup.Text>상세주소</InputGroup.Text>
							<FormControl
								{...register("weddinghall.address.detail")}
							></FormControl>
						</InputGroup>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col xs={9} sm={10}>
						<InputGroup>
							<InputGroup.Text>주소</InputGroup.Text>
							<FormControl {...addressInputProps}></FormControl>
						</InputGroup>
					</Col>
					<Col>
						<Button onClick={findAddress}>검색</Button>
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
							<FormControl as="textarea" rows={4}></FormControl>
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
