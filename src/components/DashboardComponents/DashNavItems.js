import React from "react"

const DashNavItems = () => {
	return (
		<nav className="flex flex-wrap w-full">
			<div className="p-4 w-full sm:w-1/3 lg:w-1/5">
				<div className="flex flex-col justify-center items-center p-4 shadow-dashItems z-10 bg-white rounded-md h-[110px] ">
					<svg
						rounded-mdvg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#6842ff"
						className="size-6"
					>
						<path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
						<path
							d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
							bg-white
							rounded-md
						/>
					</svg>

					<span>Products</span>
				</div>
			</div>
			<div className="p-4 w-full sm:w-1/3 lg:w-1/5">
				<div className="flex flex-col justify-center items-center p-4 shadow-dashItems bg-white rounded-md h-[110px]">
					<svg
						rounded-mdvg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#6842ff"
						className="size-6"
					>
						<path
							fillRule="evenodd"
							d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
							clipRule="evenodd"
							bg-white
							rounded-md
						/>
					</svg>
					<span>Coupons</span>
				</div>
			</div>
			<div className="p-4 w-full sm:w-1/3 lg:w-1/5">
				<div className="flex flex-col justify-center items-center p-4 shadow-dashItems bg-white rounded-md h-[110px]">
					<svg
						rounded-mdvg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#6842ff"
						className="size-6"
					>
						<path
							fillRule="evenodd"
							d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
							clipRule="evenodd"
						/>
						<path
							d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"
							bg-white
							rounded-md
						/>
					</svg>

					<span>Users</span>
				</div>
			</div>
			<div className="p-4 w-full sm:w-1/3 lg:w-1/5">
				<div className="flex flex-col justify-center items-center p-4 shadow-dashItems bg-white rounded-md h-[110px]">
					<svg
						rounded-mdvg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#6842ff"
						className="size-6"
					>
						<path
							fillRule="evenodd"
							d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
							clipRule="evenodd"
							bg-white
							rounded-md
						/>
					</svg>
					<span>Settings</span>
				</div>
			</div>
			<div className="p-4 w-full sm:w-1/3 lg:w-1/5">
				<div className="flex flex-col justify-center items-center p-4 shadow-dashItems bg-white rounded-md h-[110px]">
					<svg
						rounded-mdvg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#6842ff"
						className="size-6"
					>
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
							clipRule="evenodd"
							bg-white
							rounded-md
						/>
					</svg>
					<span>Accounts</span>
				</div>
			</div>
		</nav>
	)
}

export default DashNavItems
