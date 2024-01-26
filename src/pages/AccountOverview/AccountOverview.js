import React from "react";
import "./AccountOverview.scss";
import equalIcon from '../../assets/icons/menu.svg';
import plusIcon from "../../assets/icons/plus.jpg";

const AccountOverview = () => {
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
    </div>
  );
};

export default AccountOverview;
