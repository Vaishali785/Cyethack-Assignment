import React from "react"

const Review = () => {
	return (
		<div className="sm:w-[95%] lg:w-[70%] pt-8 pb-10 px-4">
			<span className="font-semibold text-lg inline-block pb-4">
				Reviews & Ratings
			</span>
			<div className="border-[rgba(0,0,0,.1)] border-[1px] flex p-6 rounded-lg">
				<div className="flex flex-col gap-2 border-r-[1px] w-1/3 justify-center items-center">
					<div className="flex gap-2 items-baseline">
						<div className="sm:text-3xl lg:text-5xl">4.2</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="black"
							className="size-5"
						>
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
								clipRule="evenodd"
							/>
						</svg>
						{/* <span></span> */}
					</div>
					<span className="text-sm text-[rgba(0,0,0,.6)]">26 Reviews</span>
				</div>

				<div className="flex flex-col gap-2 flex-1 pl-4">
					<div className="flex gap-1 justify-center items-center">
						{/* <div> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="limegreen"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-xs mr-3 text-[rgba(0,0,0,.7)]">5</span>
						{/* </div> */}
						<div className="bg-gray-200 rounded-md w-[80%] overflow-hidden">
							<div className="bg-green-400 h-1 w-[80%]"></div>
						</div>
					</div>
					<div className="flex gap-1 justify-center items-center">
						{/* <div> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="lawngreen"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-xs mr-3 text-[rgba(0,0,0,.7)]">4</span>
						{/* </div> */}
						<div className="bg-gray-200 rounded-md w-[80%] overflow-hidden">
							<div className="bg-green-300 h-1 w-[65%]"></div>
						</div>
					</div>
					<div className="flex gap-1 justify-center items-center">
						{/* <div className=""> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="grey"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-xs mr-3 text-[rgba(0,0,0,.7)]">3</span>
						{/* </div> */}
						<div className="bg-gray-200 rounded-md w-[80%] overflow-hidden">
							<div className="bg-yellow-500 h-1 w-[15%]"></div>
						</div>
					</div>
					<div className="flex gap-1 justify-center items-center">
						{/* <div> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="darkgrey"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-xs mr-3 text-[rgba(0,0,0,.7)]">2</span>
						{/* </div> */}
						<div className="bg-gray-200 rounded-md w-[80%] overflow-hidden">
							<div className="bg-yellow-300 h-1 w-[12%]"></div>
						</div>
					</div>
					<div className="flex gap-1 justify-center items-center">
						{/* <div> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="lightgrey"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-xs mr-3 text-[rgba(0,0,0,.7)]">1</span>
						{/* </div> */}
						<div className="bg-gray-200 rounded-md w-[80%] overflow-hidden">
							<div className="bg-red-500 h-1 w-[3%]"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review
