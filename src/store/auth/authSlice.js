import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const initialState = {
	user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
}
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action) {
			state.user = action.payload
			Cookies.set("user", JSON.stringify(action.payload), { expires: 1 })
		},
		logout(state) {
			state.user = null
			Cookies.remove("user")
		},
	},
})

export const authActions = authSlice.actions

export default authSlice.reducer
