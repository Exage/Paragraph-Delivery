import { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import 'the-new-css-reset/css/reset.css'
import './App.scss'

import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { Bag } from './pages/Bag/Bag'
import { Addresses } from './pages/Addresses/Addresses'

import { Product } from './pages/Product/Product'
import { Products } from './pages/Products/Products'

import { NotFound } from './pages/NotFound/NotFound'

import { Header } from './components/Header/Header'

function App() {
	const [isBurgerOpen, setBurgerOpen] = useState(false)

	const location = useLocation()

	const toggleBurger = () => {
		setBurgerOpen(!isBurgerOpen)
	}

	const openBurger = () => {
		setBurgerOpen(true)
	}

	const closeBurger = () => {
		setBurgerOpen(false)
	}

	const isAuthPage = !['/login', '/register'].includes(location.pathname)

	return (
		<div className="App">
			{isAuthPage && (
				<Header
					isBurgerOpen={isBurgerOpen}
					toggleBurger={toggleBurger}
					closeBurger={closeBurger}
				/>
			)}
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route index element={<Home />} />
				<Route path='/bag' element={<Bag />} />
				<Route path='/addresses' element={<Addresses />} />

				<Route path='/product/:productid' element={<Product />} />
				<Route path='/products/:productid' element={<Products />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
