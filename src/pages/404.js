import React from "react"
import styled from "styled-components"

const Center = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	font-size: 36px;

	.orange {
		color: #df6f30;
		font-size: inherit;
	}
`

export default function NotFoundPage() {
	return (
		<Center>
			404&nbsp;<span className="orange">Not Found</span>
		</Center>
	)
}
