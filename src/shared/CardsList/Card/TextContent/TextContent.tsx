import React from 'react'
import styles from './textcontent.css'
import { Title } from './Title'
import { UserLink } from './UserLink'

export function TextContent() {
	return (
		<div className={styles.textContent}>
			<div className={styles.metaData}>
				<UserLink />
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>5 часов назад
				</span>
			</div>
			<Title />
		</div>
	)
}
