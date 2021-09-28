import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"
import BorderLayout from "../../components/Layout/BorderLayout"

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
				<p>Create ID : {createId}</p>
			</Content>
		</BorderLayout>
	)
}
