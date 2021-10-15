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

			@keyframes nowToPassBackground {
				from {
					background-color: rgb(143, 171, 255);
				}
				to {
					background-color: rgb(143, 171, 255);
				}
			}

			@keyframes nowToPass {
				from {
					transform: translateX(-0%);
					background-color: rgb(83, 131, 236);
				}
				to {
					transform: translateX(100%);
				}
			}

			@keyframes emptyToNow {
				from {
					transform: translateX(-100%);
					background-color: rgb(238, 238, 238);
				}
				to {
					transform: translateX(0%);
				}
			}

			@keyframes passToNowBackground {
				from {
					background-color: rgb(143, 171, 255);
				}
				to {
					background-color: rgb(143, 171, 255);
				}
			}

			@keyframes passToNow {
				from {
					transform: translateX(100%);
				}
				to {
					transform: translateX(0%);
				}
			}

			@keyframes nowToPrev {
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

			&.pass > div {
				background-color: rgb(143, 171, 255);
			}

			&.pass.prev {
				animation: nowToPassBackground 0.5s ease-in;
			}

			&.pass.prev > div {
				animation: nowToPass 0.5s ease-in;
			}

			&.now > div {
				background-color: rgb(83, 131, 236);
			}

			&.now.back {
				animation: passToNowBackground 0.75s ease-out;
			}

			&.now.back > div {
				animation: passToNow 0.75s ease-out;
			}

			&.now:not(.back) > div {
				animation: emptyToNow 0.75s ease-in;
			}

			&.now + .prev > div {
				animation: nowToPrev 0.5s ease-out;
			}
		}
	}
`

const LayoutStep = (props) => {
	const [prevStep, setPrevStep] = React.useState(-1)

	const LayoutLevels = React.useMemo(() => {
		const { title, step } = props

		if (step) {
			setPrevStep(step.now)

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
							step.now > prevStep && idx === step.now - 1 && "prev",
							step.now < prevStep && idx === step.now + 1 && "prev",
							step.now < prevStep && idx === step.now && "back",
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
