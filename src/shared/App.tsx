import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import { Layout } from './Layout'
import './main.global.css'
import { Header } from './Header'
import { Content } from './Content'

function AppComponent() {
	return (
		<Layout>
			<Header />
			<Content>content</Content>
		</Layout>
	)
}

export const App = hot(AppComponent)
