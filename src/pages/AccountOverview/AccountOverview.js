import React from "react";
import "./AccountOverview.scss";
import equalIcon from "../../assets/icons/menu.svg";
import plusIcon from "../../assets/icons/plus.jpg";
import readMoreArrow from "../../assets/icons/readMoreArrow.svg";
import { useNavigate } from "react-router-dom";

const AccountOverview = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/learn/article');
  }

	return (
		<div className="account-overview">
			<div className="balance">$0.00</div>
			<div className="account-main">
				<span className="account-name">Accounts</span>
				<img src={equalIcon} alt="Equal" className="equal-icon" />
			</div>
			<div className="accounts">
				<div className="account-item">
					<span className="account-name">Cash</span>
					<span className="account-status">In progress</span>
				</div>
			</div>
			<div className="add-account">
				<img src={plusIcon} alt="Plus" className="plus-icon" />
				<span>Add an account</span>
			</div>
			<div>
				<h3 className="account-more">More</h3>
				<div className="card-container">
					<div className="card more-card">
						<p className="card__title">
							Saving for your first home?
						</p>
						<p className="card__content">
							Open an FHSA and contribute up to $8K/yr
							($40K max) for your down payment, tax-free.{" "}
						</p>
						<img
							className="more-card__img"
							src={readMoreArrow}
							alt="arrow pointing right"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccountOverview;
