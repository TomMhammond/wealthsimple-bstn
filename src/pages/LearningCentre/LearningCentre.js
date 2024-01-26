import PageHeader from "../../components/PageHeader/PageHeader";
import search from "../../assets/icons/search.svg";
import "./LearningCentre.scss";
import { useNavigate } from "react-router-dom";

export default function LearningCentre() {
	const navigate = useNavigate();
	const clickHandler = () => {
		navigate('/learn/article');
	}
	
	return (
		<>
			<PageHeader title={"Learning Centre"} />
			<div className="learning-home">
				<div className="search">
					<img
						className="search__icon"
						src={search}
						alt="magnifying glass"
					/>
					<input
						className="search__input"
						name="search"
						type="text"
						placeholder="Search"
					></input>
				</div>
				<h3 className="learning-home__subtitle">Bite-Sized Read</h3>
				<div className="card learning-home__card">
					<p className="card__title learning-home__card-title">
						A little goes a long way
					</p>
					<p className="card__content learning-home__card-content">
						Find out how to build wealth with as little as
						$500.
					</p>
				</div>

				<h3 className="learning-home__subtitle">
					Recommended for you
				</h3>
				{/* <Card /> */}
				<h3 className="learning-home__subtitle">Articles</h3>
				<div className="card learning-home__article"></div>
			</div>
		</>
	);
}
