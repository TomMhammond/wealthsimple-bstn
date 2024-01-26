import "./PageHeader.scss";
import gift from "../../assets/icons/giftIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import backArrow from "../../assets/icons/backArrow.svg";
import { useNavigate } from "react-router-dom";

export default function PageHeader({ title }) {
	const navigate = useNavigate();
	const clickHandler = () => {
		navigate('/');
	}

	return (
		<div className="page-header">
			<div className="back-arrow">
				<img src={backArrow} alt="arrow pointing left" onClick={clickHandler}/>
			</div>
			<h3 className="page-header__title">{title}</h3>
			<div className="icon-container">
				<img className="icon" src={gift} alt="gift" />

				<img
					className="icon"
					src={userIcon}
					alt="outline of person"
				/>
			</div>
		</div>
	);
}
