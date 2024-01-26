import "./ArticleCard.scss"; // Make sure the SCSS file is in the same directory
import { Link } from "react-router-dom";

export default function ArticleCard() {
  return (
    <div className="article-card">
      <Link to="/learn/article">
        <div className="article-card__header">
          <span className="article-card__time">5 MIN</span>
        </div>
        <div className="article-card__body">
          <h2 className="article-card__title">Building Emergency Savings</h2>
          <p className="article-card__text">
            Learning about how to set aside...
          </p>
        </div>
      </Link>
    </div>
  );
}
