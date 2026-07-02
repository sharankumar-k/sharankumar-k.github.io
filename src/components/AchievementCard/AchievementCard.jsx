import "./AchievementCard.css";

function AchievementCard({ stat, title, description }) {
  return (
    <div className="achievement-card glass-card">
      <h2 className="gradient-text">{stat}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default AchievementCard;
