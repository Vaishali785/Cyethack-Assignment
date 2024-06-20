import React, { useState } from "react"

const LoginForm = ({ handleSubmit }) => {
	const [userMail, setUserMail] = useState()

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-tr from-[#6842ff] to-[#AA42FF]">
			<form
				onSubmit={(e) => handleSubmit(e, userMail)}
				className=" p-8 rounded-lg w-1/3 bg-white
                shadow-[0px_0px_2px_0px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(25,28,33,0.06),0px_0px_0px_1px_rgba(0,0,0,0.03)]
                "
			>
				<div className="mb-8 flex flex-col items-center">
					<h2 className="font-bold text-xl text-center mb-1">Sign In </h2>
					<p className="text-[#747686] text-sm">
						Welcome! Please sign in to continue
					</p>
				</div>
				<div className="flex flex-col mb-4">
					<label
						htmlFor="email"
						className="font-semibold text-base text-[#212126] mb-2"
					>
						Email Address
					</label>
					<input
						type="email"
						name=""
						id="email"
						required
						onChange={(e) => setUserMail(e.target.value)}
						className=" shadow-input rounded-md py-2 px-2 text-sm"
					/>
				</div>
				<button
					type="submit"
					className="bg-[#6842ff] text-white w-full py-2 my-4  rounded-md hover:shadow-submitBtn hover:opacity-100 transition-all duration-500 "
				>
					<span className="text-sm">Continue</span>
				</button>
			</form>
		</div>
	)
}

export default LoginForm
