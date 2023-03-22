import React from 'react'
import { CommentsButton } from './CommentsButton'
import styles from './controls.css'
import { KarmaCounter } from './KarmaCounter'
import { SaveButton } from './SaveButton'
import { ShareButton } from './ShareButton'

interface IControls {
	num_comments: number
	score: number
}
export function Controls(props: IControls) {
	return (
		<div className={styles.controls}>
			<KarmaCounter score={props.score} />
			<CommentsButton num_comments={props.num_comments} />
			<div className={styles.actions}>
				<SaveButton />
				<ShareButton />
			</div>
		</div>
	)
}

