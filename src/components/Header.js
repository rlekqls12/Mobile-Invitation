import React from "react"
import styled from "styled-components"
import cx from "classnames"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

const Wrapper = styled.div`
	display: flex;
	padding-bottom: 50px;

	div.header-title {
		flex: 1;
		font-size: 26px;
	}

	div.header-step {
		flex: 2;
		position: relative;
		display: flex;
		justify-content: space-between;

		div.header-step--line {
			position: absolute;
			top: 50%;
			width: 100%;
			height: 1px;
			background-color: black;
			transform: translateY(-50%);
		}

		div.header-step--level {
			position: relative;
			top: 50%;
			width: 3.2vw;
			height: 3.2vw;
			min-width: 10px;
			min-height: 10px;
			max-width: 25px;
			max-height: 25px;
			overflow: hidden;
			border: 1px solid black;
			border-radius: 100%;
			background-color: rgb(238, 238, 238);
			transform: translateY(-50%);

			@keyframes next {
				from {
					transform: translateX(-100%);
					background-color: rgb(238, 238, 238);
				}
				to {
					transform: translateX(0%);
				}
			}

			@keyframes gone {
				from {
					transform: translateX(0%);
					background-color: rgb(83, 131, 236);
				}
				to {
					transform: translateX(-100%);
				}
			}

			& > div {
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}

			&:not(.pass):not(.now).gone > div {
				animation: gone 0.5s ease-out;
			}

			&.pass > div {
				background-color: rgb(143, 171, 255);
			}

			&.now > div {
				animation: next 0.5s ease-in;
				background-color: rgb(83, 131, 236);
			}
		}
	}
`

const LayoutStep = (props) => {
	const [prevStep, setPrevStep] = React.useState(-1)

	const LayoutLevels = React.useMemo(() => {
		const { title, step } = props

		if (step) {
			console.log(step.now, prevStep)
			const goNext = step.now > prevStep
			setPrevStep(step.now)
			// TODO: 원래는 step 바뀔 때마다 한 번씩 불러와져야하는데, 폼 넘어갈 때마다 setData 되서 이 함수가 두 번씩 불러와짐.
			// TODO: 애니메이션 효과 아직 미완, 오른쪽 갈때 차오르고, 왼쪽 갈때 빠지기 (왼쪽 갈때 빠지는 게 아직 구현 안 됨)

			return Array.from({ length: step.end }, (_, idx) => (
				<OverlayTrigger
					key={idx}
					placement="bottom"
					overlay={(props) => (
						<Tooltip id={idx} {...props}>
							{title[idx]}
						</Tooltip>
					)}
				>
					<div
						className={cx(
							"header-step--level",
							idx < step.now && "pass",
							goNext
								? idx === step.now - 1 && "prev"
								: idx === step.now + 1 && "prev",
							idx === step.now && "now",
						)}
					>
						<div></div>
					</div>
				</OverlayTrigger>
			))
		}

		return <></>
	}, [props.step])

	if (props.step) {
		return (
			<>
				<div className="header-step--line"></div>
				{LayoutLevels}
			</>
		)
	}

	return <></>
}

/**
 * @param {object} props
 * @param {?string} props.title
 * @param {?{
 *  now: number;
 *  end: number;
 * }} props.step
 */
export default function Header(props) {
	const targetTitle = props.title[props.step.now]

	return (
		<Wrapper>
			<div className="header-title">{targetTitle}</div>
			<div className="header-step">
				<LayoutStep title={props.title} step={props.step} />
			</div>
		</Wrapper>
	)
}
