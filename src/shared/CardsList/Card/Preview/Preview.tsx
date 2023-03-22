import React from 'react'
import styles from './preview.css'

interface IPreviewPosts {
	previewImage: string
}

export function Preview(props: IPreviewPosts) {
	return (
		<div className={styles.preview}>
			<img src={props.previewImage} alt='' className={styles.previewImg} />
		</div>
	)
}
