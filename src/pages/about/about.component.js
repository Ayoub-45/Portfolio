import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import "./about.styles.css";
import WorkSpace from "../../components/workspace/Workspace.component";
function About({ toggle }) {
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
    <>
      <div
        className="container"
        style={{
          position: `${isMobile ? "relative" : ""}`,
          top: `${toggle ? "350px" : ""}`,
        }}
      >
        <WorkSpace className="image" />
        <div className="content">
          <h1>About Me :</h1>
          <h2>
            Hey there! 👋 I'm Ayoub Nasraoui, an enthusiastic web developer from
            Tunisia. Proficient in both front-end and back-end technologies, I
            specialize in crafting intuitive and effective web solutions. I'm
            passionate about transforming ideas into engaging digital
            experiences through code. Since starting my journey in 2021, I've
            been dedicated to continuous learning and growth in the dynamic
            world of web development.
          </h2>

          <h1>What Sets Me Apart ?</h1>
          <h2>
            What sets me apart is not just my technical expertise, but my
            commitment to creating solutions that not only meet but exceed
            client expectations. I believe in the power of clean code,
            user-centric design, and continuous improvement.
          </h2>
          <h1>Let's Collaborate !</h1>
          <h2 className="mg-bottom">
            I'm eager for new opportunities and partnerships, whether with
            developers, businesses, or anyone else. Let's connect and brainstorm
            how we can collaborate to create something extraordinary. Reach out
            via LinkedIn for inquiries, collaborations, or a casual chat. Let's
            transform ideas into reality and enhance the web together!
          </h2>

          <div>
            <span className="span">
              <h2>Reach out 👉</h2>
              <SocialIcon
                target="_blank"
                url="https://www.linkedin.com/in/ayoub-nasraoui-6b06b2236/"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
