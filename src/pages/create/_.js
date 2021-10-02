import React from "react"
import { useHistory } from "react-router"
import BorderLayout from "../../components/Layout/BorderLayout"
import FamilyInfo from "../../components/create/FamilyInfo"
import DateInfo from "../../components/create/DateInfo"
import LocationInfo from "../../components/create/LocationInfo"
import MultimediaInfo from "../../components/create/MutimediaInfo"
import GreetingsInfo from "../../components/create/GreetingsInfo"
import AphorismInfo from "../../components/create/AphorismInfo"
import PersonalInfo from "../../components/create/PersonalInfo"
import NoticeInfo from "../../components/create/NoticeInfo"

// TODO: 글로벌 스크롤 디자인 적용 (얇고 플랫하게)

const headerList = [
	"가족정보",
	"날짜",
	"위치",
	"멀티미디어",
	"인사말",
	"글귀",
	"인적사항",
	"공지사항",
]

export default function Create() {
	const history = useHistory()
	const [step, setStep] = React.useState(7)

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
	createId

	const handlePreviousStep = () => {
		setStep((now) => (now > 0 ? now - 1 : now))
	}

	const handleNextStep = () => {
		setStep((now) => (now < headerList.length - 1 ? now + 1 : now))
	}

	/**
	 * @param {string} state
	 */
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
		<BorderLayout
			title={headerList[step]}
			step={step}
			lastStep={headerList.length}
			onClick={handleClick}
		>
			<FamilyInfo show={step === 0} />
			<DateInfo show={step === 1} />
			<LocationInfo show={step === 2} />
			<MultimediaInfo show={step === 3} />
			<GreetingsInfo show={step === 4} />
			<AphorismInfo show={step === 5} />
			<PersonalInfo show={step === 6} />
			<NoticeInfo show={step === 7} />
		</BorderLayout>
	)
}
