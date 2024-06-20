import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import items from "../store/items.json"
import DashList from "../components/DashboardComponents/DashList"
import { authActions } from "../store/auth/authSlice"
import DashNavItems from "../components/DashboardComponents/DashNavItems"

const Dashboard = () => {
	const user = useSelector((state) => state.auth.user)
	const dispatch = useDispatch()
	return (
		<div className="min-h-screen">
			<header className="bg-themeCol text-white py-4 px-4 md:px-10 lg:px-20 xl:px-40 flex justify-between items-start h-[20vh]">
				<div className="font-bold text-base">LOGO</div>
				<div className="flex gap-4 items-center">
					<span className="text-sm">{user}</span>
					<button
						className="bg-white text-themeCol py-2 px-4 rounded-xl"
						onClick={() => dispatch(authActions.logout())}
					>
						Logout
					</button>
				</div>
			</header>

			<div className=" absolute top-28 left-1/2 -translate-x-1/2 w-full px-4 md:px-10 lg:px-20 xl:px-40">
				{/* <h1>Products</h1> */}
				<DashNavItems />
				<main className=" mt-10 mb-20">
					<div className="border-black border-[1px] p-8 rounded-md ">
						<div className="flex justify-between items-center px-2 pb-4 mb-6 border-b-[1px] border-b-rgba(0,0,0,0.1)">
							<h1 className="text-black font-semibold text-xl">Products</h1>
							<Link
								to="/list"
								className="text-sm lg:pr-8 hover:text-themeCol hover:underline"
							>
								View All
							</Link>
						</div>
						<div>
							{items.map(
								(item, index) =>
									index <= 5 && <DashList data={item} key={item.sno} />
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default Dashboard
