export const convertInputPhone = (e, prevValue) => {
	const { target: t } = e
	const isDataAppended = prevValue ? prevValue.length < t.value.length : true

	if (/[^0-9-]/g.test(t.value)) {
		t.value = t.value.replace(/[^0-9-]/g, "")
	}

	if (isDataAppended && /^\d{3}$/g.test(t.value)) {
		t.value += "-"
	}

	if (isDataAppended && /^\d{3}-\d{4}$/g.test(t.value)) {
		t.value += "-"
	}

	if (/^\d{11}$/g.test(t.value)) {
		t.value = t.value.replace(/^(\d{3})(\d{4})(\d{4})$/g, "$1-$2-$3")
	}

	return t.value
}

export function uuid(length = 0) {
	let text = ""

	while (length-- > 0) {
		let rand = Math.floor(Math.random() * 3)

		if (rand === 2) {
			rand = Math.floor(Math.random() * 10)
		} else {
			if (rand === 1) {
				rand = Math.floor(Math.random() * 26) + 97
			} else {
				rand = Math.floor(Math.random() * 10) + 48
			}

			text += String.fromCharCode(rand)
		}
	}

	return text
}
