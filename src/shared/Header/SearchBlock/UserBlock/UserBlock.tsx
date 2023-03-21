import React from 'react'
import { Breack } from '../../../Break'
import { Icon } from '../../../Icon'
import { EColors, Text } from '../../../Text'
import styles from './userblock.css'

interface IUserBlock {
	avatarSrc?: string
	username?: string
}

export function UserBlock({ avatarSrc, username }: IUserBlock) {
	return (
		<a
			href='https://www.reddit.com/api/v1/authorize?client_id=8BsGWDUz5YTfw9Pxz7EPYA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
			className={styles.userBox}
		>
			<div className={styles.avatarBox}>
				{avatarSrc ? (
					<img src={avatarSrc} alt='user avatar' className={styles.avatarImages} />
				) : (
					<Icon name={'IconAnon'} width={50} height={50} />
				)}
			</div>
			<div className={styles.username}>
				<Breack size={12} />
				<Text size={20} color={username ? EColors.black : EColors.grey99}>
					{username || 'Аноним'}
				</Text>
			</div>
		</a>
	)
}
