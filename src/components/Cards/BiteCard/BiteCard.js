import "./BiteCard.scss";

const BiteCard = ({ title, content, className, image }) => {
  return (
    <div className="bite-card--light-green">
      <h3 className="bite-card__heading">More</h3>
      <div className="bite-card__container">
          <p className="bite-card__title">{title}</p>
          <p className="bite-card__content">{content}</p>
          {image && (
            <img
              className="bite-card__image"
              src={image}
              alt="arrow pointing right"
            />
          )}
      </div>
    </div>
  );
};

export default BiteCard;
