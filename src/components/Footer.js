import React from "react"
import styled from "styled-components"
import { Button } from "react-bootstrap"

const Wrapper = styled.div`
	position: absolute;
	left: 0px;
	bottom: 0px;
	display: flex;
	width: 100%;
	height: 7vh;
	min-height: 55px;
	max-height: 70px;
	padding: 1.25%;
	border-top: 2px solid lightgray;

	.left-side {
		flex: 1;

		button {
			border-color: gray;
			background-color: darkgray;
		}
	}
	.right-side {
		flex: 1;
		text-align: end;
		width: 100%;
	}

	button {
		width: 30%;
		height: 100%;
		line-height: 1;

		&:not(:last-child) {
			margin-right: 10px;
		}

		&.next {
			width: 60%;
		}
	}
`

/**
 * @param {object} props
 * @param {?(state) => void} props.onClick
 */
export default function Footer(props) {
	const handleClick = (e) => {
		props.onClick && props.onClick(e.currentTarget.name)
	}

	return (
		<Wrapper>
			<div className="left-side">
				<Button name="save" onClick={handleClick} disabled>
					저장
				</Button>
				<Button name="preview" onClick={handleClick} disabled>
					미리보기
				</Button>
			</div>
			<div className="right-side">
				<Button name="previous" onClick={handleClick}>
					이전
				</Button>
				<Button name="next" className="next" onClick={handleClick}>
					다음
				</Button>
			</div>
		</Wrapper>
	)
}
