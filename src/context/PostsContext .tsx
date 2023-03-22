import React, { FunctionComponent } from 'react'
import { usePostsData } from '../hooks/usePostsData'

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
export const postsContext = React.createContext<IPostsData[]>([])

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
	const [posts] = usePostsData()

	return <postsContext.Provider value={posts}>{children}</postsContext.Provider>
}
