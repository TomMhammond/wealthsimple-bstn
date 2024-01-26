import React from "react";
import "./AccountOverview.scss";
import BiteCard from "../../components/Cards/BiteCard/BiteCard";
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
      <BiteCard
        title="Saving for your first home?"
        content="Open an FHSA and contribute up to $8K/yr ($40K max) for your down payment, tax-free."
        className="light-green"
        image={readMoreArrow}
      />
    </div>
  );
};

export default AccountOverview;
