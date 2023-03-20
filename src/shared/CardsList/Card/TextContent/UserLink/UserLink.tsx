import React from 'react'
import styles from './userlink.css'

export function UserLink() {
	return (
		<div className={styles.userLink}>
			<img
				src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png'
				alt='avatar'
				className={styles.avatar}
			/>
			<a href='#user-url' className={styles.username}>
				Дмитрий Гришин
			</a>
		</div>
	)
}
