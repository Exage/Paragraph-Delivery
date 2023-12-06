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

import { Admin } from './pages/Admin/Admin'

import { NotFound } from './pages/NotFound/NotFound'

/* Components */
import { Header } from './components/Header/Header'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Loading } from './components/Loading/Loading'

function App() {
	const [isBurgerOpen, setBurgerOpen] = useState(false)

	const location = useLocation()

	const [loading, setLoading] = useState(true)
	const [isAuth, setIsAuth] = useState(!!localStorage.getItem('isAuth'))
	const [isRegister, setIsRegister] = useState(!!localStorage.getItem('isRegister'))

	const [phoneNumber, setPhoneNumber] = useState()

	// const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')))
	const [isAdmin, setIsAdmin] = useState(false)
	const [userData, setUserData] = useState({})
	const [uid, setUid] = useState('')

	useEffect(() => {
		const authStateHandler = onAuthStateChanged(auth, (user) => {
			if (user) {
				localStorage.setItem('isAuth', true)
				setIsAuth(true)

				checkUser(user.uid)
				setUid(user.uid)
			} else {
				localStorage.setItem('isAuth', false)
				localStorage.setItem('isRegister', false)

				setIsAuth(false)
				setIsRegister(false)

				setLoading(false)
			}
		})

		return (() => {
			authStateHandler()
		})
	}, [])

	const checkUser = async (uid) => {
		const docRef = doc(firestore, 'users', uid)
		const docSnap = await getDoc(docRef)

		if (docSnap.exists()) {
			// localStorage.setItem('userData', JSON.stringify(docSnap.data()))
			setUserData(docSnap.data())
			setIsAdmin(docSnap.data().isAdmin)
			localStorage.setItem('isRegister', true)
			setIsRegister(true)
		} else {
			localStorage.setItem('isRegister', false)
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

						userData={userData}
						setUserData={setUserData}

						uid={uid}
						setUid={setUid}

						setPhoneNumber={setPhoneNumber}
					/>
				} />

				<Route path="/register" element={
					<Register
						loading={loading}
						setLoading={setLoading}

						isAuth={isAuth}
						setIsAuth={setIsAuth}

						isRegister={isRegister}
						setIsRegister={setIsRegister}

						userData={userData}
						setUserData={setUserData}

						uid={uid}

						auth={auth}
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

				<Route path='/bag' element={
					<Bag
						loading={loading}

						userData={userData}
						setUserData={setUserData}

						isAuth={isAuth}
						isRegister={isRegister} 

						uid={uid}
					/>}
				/>
				<Route path='/addresses' element={<Addresses isAuth={isAuth} isRegister={isRegister} />} />

				<Route path='/product/:productid' element={
					<Product
						loading={loading}
						setLoading={setLoading}

						isAuth={isAuth}
						setIsAuth={setIsAuth}

						isRegister={isRegister}
						setIsRegister={setIsRegister}

						userData={userData}
						setUserData={setUserData}
						
						uid={uid}
					/>
				} />
				<Route path='/products/:productid' element={
					<Products
						loading={loading}
						setLoading={setLoading}

						isAuth={isAuth}
						setIsAuth={setIsAuth}

						isRegister={isRegister}
						setIsRegister={setIsRegister}

						userData={userData}
						setUserData={setUserData}
						uid={uid}
					/>
				} />

				<Route
					path="admin"
					element={
						<ProtectedRoute
							redirectPath="/"
							isAllowed={(isAdmin)}
						>
							<Admin loading={loading} />
						</ProtectedRoute>
					}
				/>

				<Route path='*' element={
					<NotFound
						userData={userData}
						isAuth={isAuth}
						isRegister={isRegister}
					/>
				} />
			</Routes>

			<div id='recaptcha-container' style={{ display: 'none' }}></div>
		</div>
	)
}

export default App
