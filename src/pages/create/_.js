import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"
import BorderLayout from "../../components/Layout/BorderLayout"
import {
	Col,
	Container,
	Dropdown,
	FormControl,
	InputGroup,
	Row,
} from "react-bootstrap"

// TODO: 글로벌 스크롤 디자인 적용 (얇고 플랫하게)

const Content = styled.div``

export default function Create() {
	const history = useHistory()
	const [step, setStep] = React.useState(0)

	const createId = React.useMemo(() => {
		const pathname = history?.location?.pathname
		if (pathname && pathname.indexOf("/") !== -1) {
			const split = pathname.split("/")

			if (split.length === 3) {
				return split[2]
			}
		}

		return undefined
	}, [history])

	const handlePreviousStep = () => {
		setStep((now) => (now > 0 ? now - 1 : now))
	}

	const handleNextStep = () => {
		setStep((now) => (now < 6 ? now + 1 : now))
	}

	const handleClick = (state) => {
		if (state === "save") {
		} else if (state === "preview") {
		} else if (state === "previous") {
			handlePreviousStep()
		} else if (state === "next") {
			handleNextStep()
		}
	}

	return (
		<BorderLayout step={step} onClick={handleClick}>
			<Content className="content">
				<Container>
					<Row className="mb-5">
						<Col xs={4} sm={4} md={4}>
							<h4>신랑측</h4>
						</Col>
						<Col xs={8} sm={8} md={8}>
							<Row className="mb-3">
								<Col>
									<InputGroup>
										<InputGroup.Text>아버님</InputGroup.Text>
										<FormControl placeholder="홍길동"></FormControl>
									</InputGroup>
								</Col>
								<Col>
									<InputGroup>
										<InputGroup.Text>어머님</InputGroup.Text>
										<FormControl placeholder="홍길동"></FormControl>
									</InputGroup>
								</Col>
							</Row>
							<Row>
								<Col>
									<InputGroup>
										<InputGroup.Text>신랑</InputGroup.Text>
										<FormControl placeholder="홍길동"></FormControl>
									</InputGroup>
								</Col>
								<Col>
									<Dropdown>
										<Dropdown.Toggle>관계 (선택)</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item>장남</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col xs={4} sm={4} md={4}>
							<h4>신부측</h4>
						</Col>
						<Col xs={8} sm={8} md={8}>
							<Row className="mb-3">
								<Col>
									<InputGroup>
										<InputGroup.Text>아버님</InputGroup.Text>
										<FormControl placeholder="홍길동"></FormControl>
									</InputGroup>
								</Col>
								<Col>
									<InputGroup>
										<InputGroup.Text>어머님</InputGroup.Text>
										<FormControl placeholder="홍길동"></FormControl>
									</InputGroup>
								</Col>
							</Row>
							<Row>
								<Col>
									<InputGroup>
										<InputGroup.Text>신부</InputGroup.Text>
										<FormControl placeholder="홍길동"></FormControl>
									</InputGroup>
								</Col>
								<Col>
									<Dropdown>
										<Dropdown.Toggle>관계 (선택)</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item>막내</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</Content>
		</BorderLayout>
	)
}
