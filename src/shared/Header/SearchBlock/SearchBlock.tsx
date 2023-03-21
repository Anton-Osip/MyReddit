import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './searchblock.css'
import { UserBlock } from './UserBlock'

interface ISearchBlockProps {
	token: string
}

interface IUserData {
	name?: string
	iconImage?: string
}

export function SearchBlock({ token }: ISearchBlockProps) {
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
					setData({ name: userData.name, iconImage: userData.icon_img.split('?')[0] })
				})
				.catch(console.log)
	}, [token])

	return (
		<div className={styles.searchBlock}>
			<UserBlock avatarSrc={data.iconImage} username={data.name} />
		</div>
	)
}
