import { Oswald } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";

export const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-dm-sans",
	display: "swap",
});

export const oswald = Oswald({
	subsets: ["latin"],
	weight: "500",
	variable: "--font-oswald",
	display: "swap",
});

export const luckiestGuy = Luckiest_Guy({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-luckiest-guy",
	display: "swap",
});
