import React from 'react'
import styles from './textcontent.css'
import { Title } from './Title'
import { UserLink } from './UserLink'

interface TextContent {
	author: string
	title: string
}

export function TextContent(props: TextContent) {
	return (
		<div className={styles.textContent}>
			<div className={styles.metaData}>
				<UserLink author={props.author} />
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>5 часов назад
				</span>
			</div>
			<Title title={props.title} />
		</div>
	)
}
