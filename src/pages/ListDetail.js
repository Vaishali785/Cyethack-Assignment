import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import items from "../store/items.json"
import DetailedView from "../components/DetailPageComponents/DetailedView"
import Service from "../components/DetailPageComponents/Service"
import Loader from "../components/Loader"
import Review from "../components/DetailPageComponents/Review"

const ListDetail = (props) => {
	const { state } = useLocation()
	const [loading, setLoading] = useState(false)
	const detailedItem = items.filter((item) => item.item_id == state)[0]

	useEffect(() => {
		if (
			sessionStorage.getItem("item_id") !== state ||
			!sessionStorage.getItem("item_id")
		) {
			setLoading(true)
		}
		setTimeout(() => {
			setLoading(false)
			sessionStorage.setItem("item_id", state)
		}, [1000])
	}, [])

	if (loading) return <Loader />
	return (
		<div className="max-h-screen">
			<div className="flex max-sm:flex-col h-full gap-2 mt-8">
				<div className="left image flex items-center sm:w-1/3 p-4 -my-8 sm:fixed max-sm:relative sm:top-0 sm:left-0 sm:bottom-0 md:ml-10 sm:ml-6 m-auto">
					<img
						src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/l/r/-original-imagwcg6wmmazhrd.jpeg?q=70&crop=false"
						alt="mobile"
						className="max-h-screen rounded-3xl"
					/>
				</div>
				<div className="details pt-8 w-full sm:w-[63%] sm:right-0 sm:absolute max-sm:relative">
					<div className="details px-4">
						<DetailedView item={detailedItem} />
						<Service />
						<Review />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListDetail
