import axios from "axios"

const httpClient = axios.create({
	withCredentials: true,
	baseURL: "https://jsonplaceholder.typicode.com/", // 이거 서버 URL로 바꾸셔도 돼요. 테스트 데이터 주는 서버 URL 임시로 넣어 놓은 거에요
})

export default httpClient
