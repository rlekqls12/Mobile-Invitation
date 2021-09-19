export const inputPhone = ({ target: t }) => {
	if (/[^0-9-]/g.test(t.value)) {
		t.value = t.value.replace(/[^0-9-]/g, "")
	}

	if (/^\d{3}$/g.test(t.value)) {
		t.value += "-"
	}

	if (/^\d{3}-\d{4}$/g.test(t.value)) {
		t.value += "-"
	}

	if (/^\d{11}$/g.test(t.value)) {
		t.value = t.value.replace(/^(\d{3})(\d{4})(\d{4})$/g, "$1-$2-$3")
	}

	return t.value
}
