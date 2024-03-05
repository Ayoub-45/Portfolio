import "./service.styles.css";
import Icon from "../technologies/Icon.component";
function Service({ service }) {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} className="service-image" />
      <div className="service-info">
        <h2 className="service-title">{service.title}</h2>
        <p className="service-description">{service.description}</p>
        <div style={{ display: "flex", gap: "12px", margin: "12px" }}>
          {service.technologies.map((technology) => {
            return <Icon technologyName={technology} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Service;
