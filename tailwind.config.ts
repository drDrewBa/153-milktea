import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
		},
		extend: {
			colors: {
				background: "var(--background)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				"secondary-10": "rgba(255, 112, 44, 0.1)",
				"secondary-20": "rgba(255, 112, 44, 0.2)",
				"secondary-80": "rgba(255, 112, 44, 0.8)",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "20px",
					lg: "80px",
				},
			},
		},
	},
	plugins: [],
};
export default config;
