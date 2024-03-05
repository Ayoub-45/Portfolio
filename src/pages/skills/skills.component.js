import React from "react";
import "./skills.styles.css";
function Skills({ toggle }) {
  return (
    <>
      <div
        className="container-skills"
        style={{ position: "relative", top: `${toggle ? "250px" : ""}` }}
      >
        <h1 className="title">Technical and Soft skills</h1>;
        <div className="ag-format-container">
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">Writing&#160;</div>
                <div className="ag-courses-item_date-box">
                  Started:
                  <span className="ag-courses-item_date">01.06.2018</span>
                </div>
              </div>
            </div>
            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">Communication</div>
                <div className="ag-courses-item_date-box">
                  Started:
                  <span className="ag-courses-item_date">1.03.2021</span>
                </div>
              </div>
            </div>
            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Front-end development&#160;+ UI/UX Design&#160;+ CMS
                </div>
                <div className="ag-courses-item_date-box">
                  Started:
                  <span className="ag-courses-item_date">01.07.2021</span>
                </div>
              </div>
            </div>
            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Back-end developement
                </div>
                <div className="ag-courses-item_date-box">
                  Started:
                  <span className="ag-courses-item_date">05.07.2023</span>
                </div>
              </div>
            </div>
            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title"> Digital Marketing</div>
                <div className="ag-courses-item_date-box">
                  Started:
                  <span className="ag-courses-item_date">1.03.2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
