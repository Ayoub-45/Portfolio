import React from "react";
import "./portfolio.styles.css";
import Card from "../../components/card/Card.component";
import projects from "../../data/projects.json";
function Portfolio({ toggle }) {
  return (
    <div
      className="container-portfolio"
      style={{ marginTop: `${toggle ? "350px" : ""}` }}
    >
      <div>
        <fieldset className="content">
          <legend className="title-projects">Projects</legend>
          <h2 className="text-content">
            As a learner, I undertook the task of constructing these projects to
            demonstrate my abilities to potential clients. Some were
            collaborative efforts involving other developers and mentors, while
            others I completed independently.
          </h2>
        </fieldset>
      </div>
      <a href="#projects" style={{ textDecoration: "none" }}>
        <h1 className="pinpoint">👇</h1>
      </a>
      <div className="projects-container" id="projects">
        {projects.map(
          ({ name, path, description, technologies, github, id }) => {
            return (
              <Card
                id={id}
                key={id}
                name={name}
                path={path}
                description={description}
                technologies={technologies}
                github={github}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Portfolio;
