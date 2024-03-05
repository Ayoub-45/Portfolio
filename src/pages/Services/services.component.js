// ServicesPage.js
import React from "react";
import Service from "../../components/service/service.component";
import services from "../../data/services.json";
import "./services.styles.css";
function Services() {
  return (
    <>
      <h1 className="services-title">Services</h1>
      <div className="services-container">
        {services.map((service) => {
          return (
            <Service className="service" service={service} key={service.id} />
          );
        })}
      </div>
    </>
  );
}

export default Services;
