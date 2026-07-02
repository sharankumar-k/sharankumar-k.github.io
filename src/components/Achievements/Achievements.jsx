import AchievementCard from "../AchievementCard/AchievementCard.jsx";
import achievements from "../../data/achievements.js";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import "./Achievements.css";

function Achievements() {
  const { ref, className } = useScrollReveal();

  return (
    <section className={className} id="achievements" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Highlights</span>
          <h2 className="section-title">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-desc">A quick overview of my academic progress, projects, and coding journey.</p>
        </div>

        <div className="achievement-grid">
          {achievements.map((item) => (
            <AchievementCard key={item.id} stat={item.stat} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
