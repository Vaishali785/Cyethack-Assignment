/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"submitBtn":
					"rgb(104, 66, 255) 0px 0px 0px 1px, rgba(255, 255, 255, 0.07) 0px 1px 1px 0px inset, rgba(34, 42, 53, 0.2) 0px 2px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 1px 0px",
				"input":
					"rgba(0, 0, 0, 0.11) 0px 0px 0px 1px, rgba(0, 0, 0, 0.07) 0px 0px 1px 0px",
				"dashItems": "0 0 10px 4px rgba(0, 0, 0, 0.25) ",
			},
			backgroundColor: {
				themeCol: "#6842ff",
			},
			colors: {
				themeCol: "#6842ff",
			},
		},
	},
	plugins: [],
}
