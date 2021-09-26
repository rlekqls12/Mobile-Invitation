import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 99vh;
	margin: 0.5vh 5vw;
	border: 2px solid black;
	border-radius: 0.2vw;
`

export default function Create() {
	const history = useHistory()

	const createId = history.location.pathname.split("/")[2]

	return <Wrapper>Create ID : {createId}</Wrapper>
}
