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
	const [saveState, setSaveState] = React.useState(new Date().getTime())
	const [step, setStep] = React.useState(0)

	// warning 제거용
	React.useEffect(() => {
		console.log(createId, data)
	}, [data])

	const handleSaveData = (fn) => {
		setData(fn)
	}

	const handlePreviousStep = () => {
		if (step > 0) setStep(step - 1)
	}

	const handleNextStep = () => {
		if (step < HeaderList.length - 1) setStep(step + 1)
	}

	/**
	 * @param {string} state
	 */
	const handleClick = (state) => {
		if (state === "save") {
			setSaveState(new Date().getTime())
		} else if (state === "preview") {
		} else if (state === "previous") {
			handlePreviousStep()
		} else if (state === "next") {
			handleNextStep()
		}
	}

	const InfoElement = React.useMemo(
		() =>
			InfoList.map((Info, index) =>
				React.createElement(Info, {
					saveState,
					key: index,
					show: index === step,
					setData: handleSaveData,
				}),
			),
		[step, saveState],
	)

	return (
		<BorderLayout
			title={HeaderList}
			step={step}
			lastStep={HeaderList.length}
			onClick={handleClick}
		>
			{InfoElement}
		</BorderLayout>
	)
}
