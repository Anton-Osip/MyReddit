import React, { useContext } from 'react'
import { postsContext } from '../../context/PostsContext '
import { merge } from '../../utils/js/merge'
import { GenericList } from '../GenericList'
import { Card } from './Card/Card'
import styles from './cardslist.css'
interface IPostsData {
	value: IPostData
	id: string
}

interface IPostData {
	author: string
	num_comments: number
	previewImage: string
	score: number
	title: string
}
export function CardsList() {
	const handleClick = () => {}
	let bestPosts = useContext(postsContext)

	bestPosts = useContext(postsContext).map(
		merge({ className: styles.card, As: 'li' as const, Component: Card, onClick: handleClick }),
	)

	console.log(bestPosts)

	return (
		<ul className={styles.cardsList}>
			<GenericList list={bestPosts} />
		</ul>
	)
}
