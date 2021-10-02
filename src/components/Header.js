import React from "react"
import styled from "styled-components"
import cx from "classnames"

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
			border: 1px solid black;
			border-radius: 100%;
			background-color: rgb(238, 238, 238);
			transform: translateY(-50%);

			&.pass {
				background-color: rgb(143, 171, 255);
			}

			&.now {
				background-color: rgb(83, 131, 236);
			}
		}
	}
`

/**
 * @param {object} props
 * @param {?string} props.title
 * @param {?{
 *  now: number;
 *  end: number;
 * }} props.step
 */
export default function Header(props) {
	const LayoutLevels = React.useMemo(() => {
		const step = props.step

		if (step) {
			return Array.from({ length: step.end }, () => undefined).map((_, idx) => {
				return (
					<div
						key={idx}
						className={cx(
							"header-step--level",
							idx < step.now && "pass",
							idx === step.now && "now",
						)}
					></div>
				)
			})
		}

		return <></>
	}, [props.step])

	const LayoutStep = React.useMemo(() => {
		if (props.step) {
			return (
				<>
					<div className="header-step--line"></div>
					{LayoutLevels}
				</>
			)
		}

		return <></>
	}, [props.step])

	return (
		<Wrapper>
			<div className="header-title">{props.title}</div>
			<div className="header-step">{LayoutStep}</div>
		</Wrapper>
	)
}
