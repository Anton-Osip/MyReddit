import React from 'react'
import styles from './preview.css'

export function Preview() {
	return (
		<div className={styles.preview}>
			<img
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6_J7JgvkCdMCf9mAPdyszXRL85A86H5xog&usqp=CAU'
				alt='preview'
				className={styles.previewImg}
			/>
		</div>
	)
}
