import React from "react"

const DetailedView = (props) => {
	const editedKeys = {
		"Mobile Name": props.item.mobiles,
		"Model": props.item.models,
		"System OS": props.item.os,
		"Release date": props.item.release_date,
		"Service center": props.item.service_center,
	}
	const canceledPrice = parseInt(props.item.price.split("$")[1]) + 50
	return (
		<div className="w-full">
			<div className="px-4 pt-2">
				{/* heading */}
				<h2 className="text-3xl font-bold pb-2">{props.item?.mobiles}</h2>
				<div className="flex gap-4 items-center border-b-[1px] border-b-rgba(0,0,0,0.1) pb-8">
					<div className="flex gap-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="gold"
							className="size-5"
						>
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-sm font-light">4.2</span>
					</div>
					<span className="text-sm text-[rgba(0,0,0,.8)] font-thin">
						20k+ Reviews{" "}
					</span>
				</div>

				{/* price, colors and add to cart btn */}
				<div className="border-b-[1px] border-b-rgba(0,0,0,0.1) pb-8">
					<div className="flex gap-4 items-baseline">
						<div className="price text-xl font-semibold pb-6 pt-8">
							{props.item?.price}
						</div>
						<div className="price text-sm font-normal pb-6 pt-8 line-through text-[rgba(0,0,0,.5)]">
							${canceledPrice}
						</div>
					</div>

					<div className="color pb-6">
						<span className="text-sm font-semibold text-gray-400">
							Select Colors:
						</span>
						<div className="flex gap-2 pt-2 pb-4">
							<span className="rounded-full inline-block w-5 h-5 bg-black border-black border-[1px]"></span>
							<span className="rounded-full inline-block w-5 h-5 bg-white border-black border-[1px]"></span>
							<span className="rounded-full inline-block w-5 h-5 bg-rose-300 border-black border-[1px]"></span>
							<span className="rounded-full inline-block w-5 h-5 bg-blue-700 border-black border-[1px]"></span>
						</div>
					</div>

					<div className="add-to-cart">
						<button className="bg-themeCol text-white py-4 rounded-lg px-6">
							Add to Cart
						</button>
					</div>
				</div>

				{/* Description */}
				<div className=" border-b-[1px]  border-b-rgba(0,0,0,0.1) py-8">
					<span className="font-semibold text-lg inline-block pb-4">
						Description
					</span>
					<p>{props.item?.description}</p>
				</div>
			</div>

			{/* Details */}
			<div className="py-8">
				<span className="font-semibold text-lg inline-block  pl-4 pb-4">
					Product Details
				</span>
				{Object.entries(editedKeys).map((item, index) => (
					<div
						key={index}
						className="grid max-sm:grid-cols-[2fr,3fr] max-sm:gap-2 max-lg:py-2 max-lg:px-4 sm:grid-cols-[1.5fr,3fr] sm:gap-4 lg:p-4"
					>
						<div className="keys font-medium capitalize">{item[0]}</div>
						<div className="values text-sm">{item[1]}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default DetailedView
