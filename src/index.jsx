import * as React from 'react'
import * as ReactDOM from 'react-dOM'
import Header from './Header'

window.addEventListener('load', () => {
	ReactDOM.render(<Header />, document.getElementById('react_root'))
})
