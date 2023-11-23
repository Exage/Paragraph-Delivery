import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, firestore } from './firebase'

import 'the-new-css-reset/css/reset.css'
import './App.scss'

/* Pages */
import { Home } from './pages/Home/Home'
import { Auth } from './pages/Auth/Auth'
import { Register } from './pages/Register/Register'
import { Bag } from './pages/Bag/Bag'
import { Addresses } from './pages/Addresses/Addresses'

import { Product } from './pages/Product/Product'
import { Products } from './pages/Products/Products'

import { NotFound } from './pages/NotFound/NotFound'

/* Components */
import { Header } from './components/Header/Header'

function App() {
	const [isBurgerOpen, setBurgerOpen] = useState(false)

	const location = useLocation()

	const [loading, setLoading] = useState(true)
	const [isAuth, setIsAuth] = useState(false)
	const [isRegister, setIsRegister] = useState(false)

	const [userData, setUserData] = useState({})
	const [uid, setUid] = useState('')

	useEffect(() => {
		const authStateHandler = onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsAuth(true)
				checkUser(user.uid)
				setUid(user.uid)
			} else {
				setIsAuth(false)
				setIsRegister(false)
				setLoading(false)
			}
		})

		return () => {
			authStateHandler()
		}
	}, [loading, isAuth, isRegister])

	const checkUser = async (uid) => {
		const docRef = doc(firestore, 'users', uid)
		const docSnap = await getDoc(docRef)

		if (docSnap.exists()) {
			setUserData(docSnap.data())
			setIsRegister(true)
		} else {
			setIsRegister(false)
		}
		setLoading(false)
	}

	const toggleBurger = () => {
		setBurgerOpen(!isBurgerOpen)
	}

	const openBurger = () => {
		setBurgerOpen(true)
	}

	const closeBurger = () => {
		setBurgerOpen(false)
	}

	const isAuthPage = !['/auth', '/register'].includes(location.pathname)

	return (
		<div className="App">
			{isAuthPage && (
				<Header
					isBurgerOpen={isBurgerOpen}
					toggleBurger={toggleBurger}
					closeBurger={closeBurger}

					userData={userData}
				/>
			)}
			<Routes>
				<Route path="/auth" element={
					<Auth
						loading={loading}
						setLoading={setLoading}

						isAuth={isAuth}
						setIsAuth={setIsAuth}

						isRegister={isRegister}
						setIsRegister={setIsRegister}
					/>
				} />

				<Route path="/register" element={<Register
					loading={loading}
					setLoading={setLoading}

					isAuth={isAuth}
					setIsAuth={setIsAuth}

					isRegister={isRegister}
					setIsRegister={setIsRegister}

					uid={uid}
				/>
				} />

				<Route index element={
					<Home
						loading={loading}
						setLoading={setLoading}

						isAuth={isAuth}
						setIsAuth={setIsAuth}

						isRegister={isRegister}
						setIsRegister={setIsRegister}

						userData={userData}
					/>
				} />

				<Route path='/bag' element={<Bag />} />
				<Route path='/addresses' element={<Addresses />} />

				<Route path='/product/:productid' element={<Product />} />
				<Route path='/products/:productid' element={
					<Products
						loading={loading}
						setLoading={setLoading}

						isAuth={isAuth}
						setIsAuth={setIsAuth}

						isRegister={isRegister}
						setIsRegister={setIsRegister}

						userData={userData}
					/>}
				/>

				<Route path='*' element={<NotFound />} />
			</Routes>
			<div id='recaptcha-container' style={{ display: 'none' }}></div>
		</div>
	)
}

export default App
