import React from 'react'
import className from 'classnames'
import styles from './breack.css'

type TBreakSize = 4 | 8 | 12 | 16 | 20
type TDisplays = 'mobile' | 'tablet' | 'desktop'

interface IBreackProps {
	size: TBreakSize
	mobileSize?: TBreakSize
	tabletSize?: TBreakSize
	desktopSize?: TBreakSize
	inline?: boolean
	top?: boolean
}
export function Breack(props: IBreackProps) {
	const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize } = props
	return (
		<div
			className={className(
				styles[`s${size}`],
				{ [styles[`mobile_s${mobileSize}`]]: mobileSize },
				{ [styles[`tablet_s${tabletSize}`]]: tabletSize },
				{ [styles[`desktop_s${desktopSize}`]]: desktopSize },
				{ [styles.inline]: inline },
				{ [styles.top]: top },
			)}
		/>
	)
}
