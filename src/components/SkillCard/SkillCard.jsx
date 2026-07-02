import "./SkillCard.css";

function SkillCard({ icon, title, subtitle }) {
  return (
    <div className="skill-card glass-card">
      <i className={`${icon} skill-icon`}></i>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default SkillCard;
