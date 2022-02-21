import React from "react";
import styled from "@emotion/styled";

const SectionComp5 = () => {
  return (
    <Wrapper>
      <div className="section-H mb-5">
        <div className="texts">
          <h1 className="text-success text-center mt-5  ">
            {" "}
            Our Instructors & Teachers
          </h1>
          <p className="text-center mb-5    #6C757D">
            we have the best teachers and instructors that would be able to
            train your kids making them Creative, God <br />
            fearing, Respectful and Intelligent.{" "}
          </p>
        </div>
        <div className="container d-flex pictures">
          <div className="col pic1 me-3">
            <div className="lineargra">
              <button className="btn-small text-success mx-3">full time</button>
              <p className="text-light mx-3">
                Doctorate appointment have the diagnose
              </p>{" "}
              <p className="text-light mx-3">
                <i className="fas fa-calendar-alt text-light"></i>
                &nbsp;&nbsp;28th April 2021
              </p>
            </div>
          </div>
          <div className="col pic2 me-3 mx-3">
            <div className="lineargra">
              <span className="pushen">
                <button className="btn-small text-success mx-3">
                  full time
                </button>
                <p className="text-light mx-3">
                  Doctorate appointment have the diagnose
                </p>{" "}
                <p className="text-light mx-3">
                  <i className="fas fa-calendar-alt "></i>&nbsp;&nbsp;28th April
                  2021
                </p>
              </span>
            </div>
          </div>
          <div className="col pic3 mx-3">
            <div className="lineargra">
              <button className="btn-small text-success mx-3">full time</button>
              <p className="text-light mx-3">
                Doctorate appointment have the diagnose
              </p>{" "}
              <p className="text-light mx-3">
                <i className="fas fa-calendar-alt text-light"></i>
                &nbsp;&nbsp;28th April 2021
              </p>
            </div>
          </div>
        </div>
        {/* <div className="thebtn"></div> */}
      </div>
    </Wrapper>
  );
};

export default SectionComp5;

const Wrapper = styled.div`
  .pic1 {
    background-image: url("../image/Mask Group (5).png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 200px;
    height: 400px;
  }
  .pic2 {
    background-image: url("../image/man.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 200px;
    height: 400px;
  }
  .pic3 {
    background-image: url("../image/cloud.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 200px;
    height: 400px;
  }
`;
