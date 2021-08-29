import { useQuery } from "react-query"
import httpClient from "./http-client"

class UserService {
	getUser(id) {
		return httpClient.get(`/users/` + id || "")
	}
}

const userService = new UserService()

export default userService

export function useUser(id) {
	const data = useQuery(["user", id], async () => {
		const { data } = await userService.getUser(id)

		return data
	})

	return data
}
