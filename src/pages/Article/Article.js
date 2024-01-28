import PageHeader from "../../components/PageHeader/PageHeader";
import piggyBank from "../../assets/images/piggy-bank-on-desk.png";
import "./Article.scss";
import ArticleCard from "../../components/Cards/ArticleCard/ArticleCard";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import { Navigate, Link } from "react-router-dom";

export default function Article() {
  const [isShowing, setisShowing] = useState(false);

  const popupClickHandler = () => {
    setisShowing(!isShowing);
  };

  return (
    <>
      <PageHeader title={"Learning Centre"} />
      <main className="main">
        <h1 className="article__title">What is a TFSA Account?</h1>
        <img
          className="article__img"
          src={piggyBank}
          alt="piggy bank on desk"
        ></img>
        <p className="article__para">
          <span className="bold">
            A perfect account if you have big savings goals in a smaller
            timeframe. Withdraw anytime, tax-free.{" "}
          </span>
        </p>
        <p className="article__para">
          A tax-free savings account is an account available in Canada that
          provides tax benefits for saving. Investment income, including{" "}
          <span className="highlight">capital gains</span> and
          <span className="highlight"> dividends</span>, earned in a TFSA is not
          taxed in most cases, even when withdrawn. Contributions to a TFSA are
          not deductible for income tax purposes, unlike contributions to a{" "}
          <span className="highlight" onClick={popupClickHandler}>
            registered retirement savings plan
          </span> 
          (RRSP).
        </p>

        <p className="article__para">
          <span className="bold">Keep your growth tax-free</span>
        </p>
        <p className="article__para">
          With a TFSA, you won’t pay taxes on any gains on your investments —
          it’s yours to keep. Withdraw whenever you need to Take money out of
          your TFSA any time, hassle-free. The withdrawn amount is added back to
          your contribution room the following year. Save without restrictions
          Use your TFSA to save for a home, education, or any big life expense.
          There are no limits on how you use the funds.
        </p>

          <aside>
            <ArticleCard />
            {/* carousel component should go here */}
          </aside>


        <div
          className={`popup ${isShowing ? "" : "popup--hidden"}`}
          onClick={popupClickHandler}
        >
          <p className="popup__title">
            <span className="bold">Registered Retirement Savings Plan</span>
          </p>
          <p className="popup__content">
            An RRSP (Registered Retirement Savings Plan) is a savings plan that
            you can contribute to over the course of your working life.
          </p>
        </div>
      </main>
    </>
  );
}
