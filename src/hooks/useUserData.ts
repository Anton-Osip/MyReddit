import { useEffect, useState, useContext } from 'react'
import axios from 'axios'

interface IUserData {
	name?: string
	iconImg?: string
}
export function useUserData(token: string) {
	const [data, setData] = useState<IUserData>({})

	useEffect(() => {
		if (token && token.length > 0 && token !== 'undefined')
			axios
				.get('https://oauth.reddit.com/api/v1/me.json', {
					headers: {
						Authorization: `bearer ${token}`,
					},
				})

				.then(resp => {
					const userData = resp.data
					setData({ name: userData.name, iconImg: userData.icon_img.split('?')[0] })
				})
				.catch(console.log)
	}, [token])
	return [data]
}
