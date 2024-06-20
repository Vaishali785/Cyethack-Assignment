import React from "react"
import { Link } from "react-router-dom"

const DashList = (props) => {
	return (
		<div>
			<Link
				to="/list/details"
				state={props?.data.item_id}
				className="grid xl:grid-cols-[100px,1fr,1.5fr,1.5fr,repeat(3,minmax(0,1fr))] min-[851px]:max-xl:grid-cols-[100px,1fr,1.5fr,1.5fr,1fr,1fr] sm:max-[850px]:grid-cols-[100px,1fr,1.5fr,1fr,1fr]  grid-cols-[80px,1fr,2fr,1fr] gap-2 justify-center items-start w-full   px-4  hover:bg-themeCol hover:text-white hover:rounded-md"
			>
				<div className="  py-5 px-3 text-sm leading-[1.38rem] s_no">
					{props?.data.sno}.
				</div>
				<div className="  py-5 px-3 text-sm leading-[1.38rem] date-time flex flex-col gap-2">
					<span className="mobiles">{props?.data?.mobiles || "-"}</span>
				</div>
				<div className="  py-5 px-3 text-sm leading-[1.38rem] truncate text-ellipsis models">
					{props?.data?.models || "-"}
				</div>
				<div className="  py-5 px-3 text-sm leading-[1.38rem] truncate text-ellipsis os xl:block max-[850px]:hidden ">
					{props?.data?.os || "-"}
				</div>
				<div className="  py-5 px-3 text-sm leading-[1.38rem] date sm:inline-block hidden">
					{props?.data?.release_date || "-"}
				</div>
				<div className="  py-5 px-3 text-sm leading-[1.38rem] service_center xl:block hidden">
					{props?.data?.service_center || "-"}
				</div>
				<div className="  py-5 px-3 text-sm leading-[1.38rem] price">
					{props?.data.price}
				</div>
			</Link>
		</div>
	)
}

export default DashList
