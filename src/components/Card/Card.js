import './Card.scss'; // Make sure the SCSS file is in the same directory

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-time">5 MIN</span>
      </div>
      <div className="card-body">
        <h2 className="card-title">Building Emergency Savings</h2>
        <p className="card-text">Learning about how to set aside...</p>
      </div>
      <img
        src="https://placehold.co/324x179" // Use the actual image URL here
        alt="People discussing finances with a piggy bank on the table"
        className="card-image"
      />
    </div>
  );
};

export default Card;