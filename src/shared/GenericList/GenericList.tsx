import React, { FunctionComponent } from 'react'

interface IItem<T> {
	id: string
	value: T
	Component?: FunctionComponent<{ value: T }>
	onClick: (id: string) => void
	className?: string
	As?: 'a' | 'li' | 'button' | 'div'
	href?: string
}

interface IGenericListProps<T> {
	list: IItem<T>[]
}

export function GenericList<T>(props: React.PropsWithChildren<IGenericListProps<T>>) {
	return (
		<>
			{props.list.map(({ As = 'div', Component, onClick, id, className, href, value }) => (
				<As
					className={className}
					onClick={() => {
						onClick(id)
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
