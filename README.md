# 모바일 청첩장 프론트엔드

## 백엔드 API

백엔드 API 연결은 user.service.js 처럼 하시면 됩니다.
UserService처럼 클래스 만드시고 안에다가 axios get post 반환하는 함수 만들고,

```
const userService = new UserService()

export default userService
```

이런식으로 선언 하신뒤,

```
export function useUser(id) {
	const data = useQuery(["user", id], async () => {
		const { data } = await userService.getUser(id)

		return data
	})

	return data
}
```

이런 형태로 함수 만들어서 React Page에서 useUser 함수 불러서 사용하시면 됩니다.
useQuery 라이브러리가 첫 번째 파라미터가 같은 값이 들어오면 통신을 하지 않고 그 전에 통신 했던 값을 돌려줍니다.

## 페이지 생성 방법

DynamicRoutes.js가 현재 Url에 맞게 폴더에 있는 파일을 알아서 찾아주므로, 페이지 파일을 pages 내에 자유롭게 만드시면 됩니다.

pages/index.js 파일은 http://localhost/index 혹은 http://localhost/ 접속 시 보여집니다.
pages/test/abcd.js 파일은 http://localhost/test/abcd 접속 시 보여집니다.

페이지 파일이 없는 경우 404.js 가 표시됩니다.
