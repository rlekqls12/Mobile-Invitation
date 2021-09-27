import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"
import BorderLayout from "../../components/Layout/BorderLayout"

// TODO: 글로벌 스크롤 디자인 적용 (얇고 플랫하게)

const Content = styled.div``

export default function Create() {
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

	return (
		<BorderLayout>
			<Content className="content">Create ID : {createId}</Content>
		</BorderLayout>
	)
}
