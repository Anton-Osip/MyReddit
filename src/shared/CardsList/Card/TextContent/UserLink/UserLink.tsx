import React from 'react'
import styles from './userlink.css'

interface IUserLink {
	author: string
}

export function UserLink(props: IUserLink) {
	return (
		<div className={styles.userLink}>
			<img
				src='https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'
				alt='avatar'
				className={styles.avatar}
			/>
			<a href='#user-name' className={styles.username}>
				{props.author}
			</a>
		</div>
	)
}
