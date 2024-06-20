import React from "react"
import { Link } from "react-router-dom"

const ListTableBodyRow = (props) => {
	return (
		<Link
			to="/list/details"
			state={props?.data.item_id}
			className="grid xl:grid-cols-[100px,1fr,1.5fr,1.5fr,repeat(3,minmax(0,1fr))] min-[851px]:max-xl:grid-cols-[100px,1fr,1.5fr,1.5fr,1fr,1fr] sm:max-[850px]:grid-cols-[100px,1fr,1.5fr,1fr,1fr]  min-[450px]:max-sm:grid-cols-[80px,1fr,2fr,1fr] grid-cols-[80px,2fr,1fr] gap-2 justify-center items-start w-full  bg-gray-100 px-4 shadow-[35px_0_60px_-15px_rgba(0,0,0,0.3)] hover:bg-themeCol hover:text-white "
		>
			<div className="  py-5 px-3 text-sm leading-[1.38rem] s_no">
				{props?.data.sno}.
			</div>
			<div className="  py-5 px-3 text-sm leading-[1.38rem] flex flex-col gap-2">
				<span className="mobiles">{props?.data?.mobiles || "-"}</span>
			</div>
			<div className="  py-5 px-3 text-sm leading-[1.38rem] truncate text-ellipsis models max-[450px]:hidden min-[450px]:inline-block">
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
	)
}

export default ListTableBodyRow
