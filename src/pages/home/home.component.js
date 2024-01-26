import React, { useEffect, useState } from "react";
import "./home.styles.css";
import { Link } from "react-router-dom";
function Home({ toggle }) {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 746px)").matches
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 746px)").matches);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`${isMobile ? "set-mobile" : ""}`}
      style={{
        marginTop: `${toggle && isMobile ? "350px" : ""}`,
        marginleft: `${toggle ? "350px" : ""}`,
      }}
    >
      <div
        className="home-container"
        style={{ marginLeft: `${toggle ? "35px" : ""}` }}
      >
        <h1>
          Hello ,I am Ayoub
          <br />
        </h1>
        <h1>Web developer</h1>
        <div className="hire-me-container">
          <Link className="hire-me" to="/contact">
            Hire me
          </Link>
          <Link className="hire-me" to="/resume">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
