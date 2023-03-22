import React from 'react'
import { Controls } from './Controls'
import { Menu } from './Menu'
import { Preview } from './Preview'
import { TextContent } from './TextContent'

interface IPostsData {
	value: IPostData
}

interface IPostData {
	author: string
	num_comments: number
	previewImage: string
	score: number
	title: string
}

export function Card(props: IPostsData) {
	return (
		<>
			<TextContent author={props.value.author} title={props.value.title} />
			<Preview previewImage={props.value.previewImage} />
			<Menu />
			<Controls num_comments={props.value.num_comments} score={props.value.score} />
		</>
	)
}
