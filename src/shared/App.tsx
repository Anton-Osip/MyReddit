import { hot } from 'react-hot-loader/root'
import React, { useEffect, useState } from 'react'
import { Layout } from './Layout'
import './main.global.css'
import { Header } from './Header'
import { Content } from './Content'
import { CardsList } from './CardsList'
import { useToken } from '../hooks/useToken'
import { tokenContext } from '../context/tokenContext'
import { UserContextProvider } from '../context/userContext'

function AppComponent() {
	const [token] = useToken()

	return (
		<tokenContext.Provider value={token}>
			<UserContextProvider>
				<Layout>
					<Header />
					<Content>
						<CardsList />
					</Content>
				</Layout>
			</UserContextProvider>
		</tokenContext.Provider>
	)
}

export const App = hot(() => <AppComponent />)
