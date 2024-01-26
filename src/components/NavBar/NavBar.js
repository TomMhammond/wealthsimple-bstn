import "./NavBar.scss";
import home from "../../assets/icons/home.svg";
import search from "../../assets/icons/search.svg";
import transfer from "../../assets/icons/transfers.svg";
import clock from "../../assets/icons/clock.svg";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
	const navigate = useNavigate();
	const clickHandler = () => {
		navigate('/');
	}


	return (
		<div className="navbar">
			<img src={home} alt="house" onClick={clickHandler}/>
			<img src={search} alt="magnifying glass" />
			<img src={transfer} alt="two arrows facing outward" />
			<img src={clock} alt="clock" />
		</div>
	);
}
