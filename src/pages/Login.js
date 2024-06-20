import React from "react"
import LoginForm from "../components/LoginForm"
import { authActions } from "../store/auth/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = (e, username) => {
		e.preventDefault()
		dispatch(authActions.login(username))
		navigate("/dashboard")
	}

	return <LoginForm handleSubmit={handleSubmit} />
}

export default Login
