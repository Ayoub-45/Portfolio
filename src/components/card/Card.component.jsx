import React from "react";
import "./Card.styles.css";
import Icon from "../technologies/Icon.component";
function Card({ path, name, description, github, technologies, id }) {
  return (
    <div className="card">
      <h1 className="header-project">Project #{id}</h1>
      <img src={path} alt={name} />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>

        <div className="link">
          <a
            target="_blank"
            rel="norferrer noreferrer"
            href={github}
            className="github-link"
          >
            View code
          </a>
        </div>
        <div style={{ display: "flex", gap: "12px", margin: "12px" }}>
          {technologies.map((technology) => {
            return <Icon technologyName={technology} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
