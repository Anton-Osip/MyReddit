import React, { FunctionComponent } from 'react'

interface IItem<T> {
	id: string
	value: T
	Component?: FunctionComponent<{ value: T }>
	onClick?: (id: string) => void
	className?: string | undefined
	As?: 'a' | 'li' | 'button' | 'div'
	href?: string
}

interface IGenericListProps<T> {
	list: IItem<T>[]
}

export function GenericList<T>(props: React.PropsWithChildren<IGenericListProps<T>>) {
	const NOOP = () => {}
	
	return (
		<>
			{props.list.map(({ As = 'div', Component, onClick, id, className, href, value }) => (
				<As
					className={className}
					onClick={() => {
						onClick = NOOP
					}}
					key={id}
					href={href}
				>
					{Component ? <Component value={value} /> : <>{value}</>}
				</As>
			))}
		</>
	)
}
