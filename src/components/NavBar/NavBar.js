import "./NavBar.scss";
import home from "../../assets/icons/home.svg";
import search from "../../assets/icons/search.svg";
import transfer from "../../assets/icons/transfers.svg";
import clock from "../../assets/icons/clock.svg";

export default function NavBar() {
	return (
		<div className="navbar">
			<img src={home} alt="house" />
			<img src={search} alt="magnifying glass" />
			<img src={transfer} alt="two arrows facing outward" />
			<img src={clock} alt="clock" />
		</div>
	);
}
