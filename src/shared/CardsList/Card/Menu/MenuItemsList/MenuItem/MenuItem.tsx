import React from 'react'
import styles from './menuitem.css'
import { Text, EColors } from '../../../../../Text/Text'

interface IMenuItem {
	value: { text: string; img: JSX.Element }
}
export function MenuItem({ value }: IMenuItem) {
	return (
		<>
			{value.img}
			<span className={styles.title}>
				<Text mobileSize={12} size={14} color={EColors.grey99}>
					{value.text}
				</Text>
			</span>
		</>
	)
}
