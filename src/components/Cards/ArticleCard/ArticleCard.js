import "./ArticleCard.scss"; // Make sure the SCSS file is in the same directory

export default function ArticleCard() {
  return (
    <div className="article-card">
      <div className="article-card__header">
        <span className="article-card__time">5 MIN</span>
      </div>
      <div className="article-card__body">
        <h2 className="article-card__title">Building Emergency Savings</h2>
        <p className="article-card__text">Learning about how to set aside...</p>
      </div>
    </div>
  );
}
