import { oswald } from "../app/fonts/fonts";
import { twMerge } from "tailwind-merge"
import MenuIcon from "@/public/menu.svg"

const Header = () => {
	return (
		<header className="sticky top-0 backdrop-blur-md z-20">
			<div className="py-5">
				<div className="container">
					<div className="flex items-center justify-between">
						<h2 className={twMerge(oswald.className, "text-4xl text-secondary hover:cursor-pointer")}>
							153
						</h2>
						<MenuIcon className="w-10 h-10 md:hidden" />
						<nav className="hidden md:block">
							<ul className="flex gap-7 font-light items-center">
								<li className="link"><a href="#">About</a></li>
								<li className="link"><a href="#">Gallery</a></li>
								<li className="link"><a href="#">Location</a></li>
								<button className="btn-nav" type="button">
									Order Now
								</button>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header