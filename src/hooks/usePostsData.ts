import { useEffect, useState } from 'react'
import axios from 'axios'

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
export function usePostsData() {
	const [posts, setPosts] = useState<IPostsData[]>([])

	useEffect(() => {
		axios
			.get('https://oauth.reddit.com/best.json', {
				headers: {
					Authorization: `bearer `,
				},
			})

			.then(resp => {
				const bestPosts = resp.data.data.children

				let postsState: IPostsData[] = []

				bestPosts.map((post: any) => {
					let img = post.data.url.includes('.jpg')
						? post.data.url
						: 'https://cdn.dribbble.com/userupload/3249462/file/original-ffb64fcee06f2ea3fe715dbf364787f5.jpg?compress=1&resize=1200x1557'

					postsState.push({
						value: {
							author: post.data.author,
							num_comments: post.data.num_comments,
							previewImage: img,
							score: post.data.score,
							title: post.data.title,
						},
						id: post.data.id,
					})
				})
				setPosts(postsState)
			})
			.catch(console.log)
	}, [])
	return [posts]
}
