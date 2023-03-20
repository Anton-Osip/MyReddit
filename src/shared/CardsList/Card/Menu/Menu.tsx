import React from 'react'
import { Dropdown } from '../../../Dropdown'
import { Icon } from '../../../Icon'
import styles from './menu.css'
import { MenuItemsList } from './MenuItemsList/MenuItemsList'

export function Menu() {
	return (
		<div className={styles.menu}>
			<Dropdown
				button={
					<button className={styles.menuButton}>
						<Icon name='MenuButtonIcon' width={5} height={20} />
					</button>
				}
				onClose={() => console.log('closed')}
				onOpen={() => console.log('opened')}
				// isOpen={true}
			>
				<MenuItemsList />
			</Dropdown>
		</div>
	)
}
