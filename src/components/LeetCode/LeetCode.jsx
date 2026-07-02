import leetcodeStats from "../../data/leetcodeStats.js";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import leetcodeImage from "../../assets/leetcode-grid.png";
import "./LeetCode.css";

function LeetCode() {
  const { ref, className } = useScrollReveal();

  return (
    <section className={className} id="leetcode" ref={ref}>
      <div className="container">
        <div className="leetcode-box glass-card">
          <div className="leetcode-content">
            <span className="section-subtitle">Problem Solving</span>

            <h2>LeetCode Journey</h2>

            <p>
              I regularly practice coding challenges to improve problem-solving, algorithms, debugging, and data
              structure skills.
            </p>

            <div className="leetcode-stats">
              {leetcodeStats.map((stat) => (
                <div className="stat-item" key={stat.id}>
                  <h3>{stat.value}</h3>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <a
              href="https://leetcode.com/u/sharankumar2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-creative btn-primary"
            >
              Visit LeetCode Profile
            </a>
          </div>

          <div className="leetcode-visual">
            <div className="img-wrapper">
              <img src={leetcodeImage} alt="LeetCode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeetCode;
