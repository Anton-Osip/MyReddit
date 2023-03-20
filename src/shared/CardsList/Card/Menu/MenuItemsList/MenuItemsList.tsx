import React from 'react'
import { merge } from '../../../../../utils/js/merge'
import { generateId } from '../../../../../utils/react/generateRandomIndex'
import { GenericList } from '../../../../GenericList/GenericList'
import { Icon } from '../../../../Icon/Icon'
import { MenuItem } from './MenuItem/MenuItem'
import styles from './menuitemslist.css'
import { Text, EColors } from './../../../../Text/Text'

const LIST = [
	{ value: { text: 'Комментарий', img: <Icon name='CommentIcon' size={15} /> } },
	{ value: { text: 'Поделиться', img: <Icon name='ShareIcon' width={12} height={14} /> } },
	{ value: { text: 'Скрыть', img: <Icon name='HideIcon' size={14} /> } },
	{ value: { text: 'Сохранить', img: <Icon name='SaveIcon' size={14} /> } },
	{ value: { text: 'Пожаловаться', img: <Icon name='ComplainIcon' width={16} height={14} /> } },
]
	.map(generateId)
	.map(merge({ className: styles.menuItem, As: 'li' as const, Component: MenuItem }))

export function MenuItemsList() {
	const handleClick = () => {
		console.log(' ')
	}

	return (
		<ul className={styles.menuItemsList}>
			<GenericList<{ text: string; img: JSX.Element }>
				list={LIST.map(merge({ onClick: handleClick }))}
			/>
			<button className={styles.closeButton}>
				<Text mobileSize={12} size={14} color={EColors.grey66}>
					Закрыть
				</Text>
			</button>
		</ul>
	)
}
