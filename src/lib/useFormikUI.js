import { useFormik } from "formik"

export default function useFormikUI(initialFormikConfig) {
	const formik = useFormik(initialFormikConfig)

	formik.field = new Proxy(
		{},
		{
			get: (_, name) => {
				return formik.getFieldProps(name)
			},
			set: () => {
				return true
			},
		},
	)

	formik.touchedError = new Proxy(
		{},
		{
			get: (_, name) => {
				return formik.touched[name] && formik.errors[name]
			},
			set: () => {
				return true
			},
		},
	)

	return formik
}
