import React from "react"
import styled from "styled-components"
import { useUser } from "../api/user.service"

const Center = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: inherit;
	height: inherit;

	p {
		margin: 6px 0px;
		text-align: center;
	}
	.title {
		font-size: 24px;
	}
	.data {
		color: green;
		font-weight: bold;
	}
`

const Flex = styled.div`
	display: flex;
`

export default function Example() {
	const [userId, setUserId] = React.useState(1)
	const { isLoading, data: user } = useUser(userId)

	const handleUserIdIncrease = () => {
		setUserId((prev) => (prev > 9 ? prev : prev + 1))
	}

	const handleUserIdDecrease = () => {
		setUserId((prev) => (prev < 2 ? prev : prev - 1))
	}

	return (
		<Center>
			<div>
				<p className="title">== User ==</p>
				<p>
					Name {">>"}{" "}
					<span className="data">{isLoading ? "Loading" : user.name}</span>{" "}
					{"<<"}
				</p>
				<p>
					UserName {">>"}{" "}
					<span className="data">{isLoading ? "Loading" : user.username}</span>{" "}
					{"<<"}
				</p>
				<p>
					Email {">>"}{" "}
					<span className="data">{isLoading ? "Loading" : user.email}</span>{" "}
					{"<<"}
				</p>
				<p>
					Phone {">>"}{" "}
					<span className="data">{isLoading ? "Loading" : user.phone}</span>{" "}
					{"<<"}
				</p>
				<p>
					Company {">>"}{" "}
					<span className="data">
						{isLoading ? "Loading" : user.company.name}
					</span>{" "}
					{"<<"}
				</p>
			</div>
			<br />
			<Flex>
				<button onClick={handleUserIdDecrease}>Prev</button>
				<span>&nbsp;{userId} / 10&nbsp;</span>
				<button onClick={handleUserIdIncrease}>Next</button>
			</Flex>
		</Center>
	)
}
