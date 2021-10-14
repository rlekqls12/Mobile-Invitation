import React from "react"
import { useHistory } from "react-router"
import BorderLayout from "../../components/Layout/BorderLayout"
import FamilyInfo from "../../components/create/FamilyInfo"
import LocationInfo from "../../components/create/LocationInfo"
import MultimediaInfo from "../../components/create/MutimediaInfo"
import GreetingsInfo from "../../components/create/GreetingsInfo"
import AphorismInfo from "../../components/create/AphorismInfo"
import PersonalInfo from "../../components/create/PersonalInfo"
import NoticeInfo from "../../components/create/NoticeInfo"

// TODO: 글로벌 스크롤 디자인 적용 (얇고 플랫하게)

const HeaderList = [
	"가족정보",
	"예식장",
	"멀티미디어",
	"인사말",
	"글귀",
	"인적사항",
	"공지사항",
]
const InfoList = [
	FamilyInfo,
	LocationInfo,
	MultimediaInfo,
	GreetingsInfo,
	AphorismInfo,
	PersonalInfo,
	NoticeInfo,
]
function InfoElement({ step, setData }) {
	return (
		<>
			{InfoList.map((Info, index) =>
				React.createElement(Info, {
					setData,
					key: index,
					show: index === step,
				}),
			)}
		</>
	)
}

function useCreateId() {
	const history = useHistory()

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

	return createId
}

export default function Create() {
	const createId = useCreateId()
	const [data, setData] = React.useState({})
	const [step, setStep] = React.useState(0)

	// warning 제거용
	createId, data

	const handlePreviousStep = () => {
		setStep((now) => (now > 0 ? now - 1 : now))
	}

	const handleNextStep = () => {
		setStep((now) => (now < HeaderList.length - 1 ? now + 1 : now))
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

	React.useEffect(() => {
		console.log("data changed :", data)
	}, [data])

	return (
		<BorderLayout
			title={HeaderList}
			step={step}
			lastStep={HeaderList.length}
			onClick={handleClick}
		>
			<InfoElement step={step} setData={setData} />
		</BorderLayout>
	)
}
