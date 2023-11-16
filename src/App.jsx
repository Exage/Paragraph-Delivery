import 'the-new-css-reset/css/reset.css'
import './App.scss'

import { Header } from './components/Header/Header'
import { useState } from 'react'

function App() {
	const [isBurgerOpen, setBurgerOpen] = useState(false)
	
	const toggleBurger = () => {
		setBurgerOpen(!isBurgerOpen)
	}

	const openBurger = () => {
		setBurgerOpen(true)
	}

	const closeBurger = () => {
		setBurgerOpen(false)
	}
	
	return (
		<div className="App">
			<Header 
				isBurgerOpen={isBurgerOpen}
				
				toggleBurger={toggleBurger}
				closeBurger={closeBurger}
			/>
		</div>
	)
}

export default App
