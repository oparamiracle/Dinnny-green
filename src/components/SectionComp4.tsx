import React from "react";
import styled from "@emotion/styled";

const SectionComp4 = () => {
  return (
    <Wrapper>
      <div className="container  ">
        <div className="sectionE pt-5 pb-5">
          <div className="">
            <img src="../image/Group 35.png" className="static" alt="" />
          </div>
          <div className="mt-5">
            <h1 className="Popular text-center mt-5">Popular Classes</h1>
            <p className="text-center mt-3 mb-4 text-success">
              {" "}
              we have built hospitals, arranged docctor appointments have the
              dinose and threat <br /> yourem ipsu r aol ad menriam, quis
              nostrud exercitation{" "}
            </p>
          </div>

          <div className="row row-cols-1 mabotom row-cols-md-3 pt-5 g-1">
            <div className="col">
              <div className="card h-100 w-75 cardy justify-content-between py-1 align-items-center">
                <img
                  src="../image/Ellipse 16 (1).png"
                  className="card-img-top imgcard"
                  alt="..."
                />
                <div className="card-body ">
                  <div className="d-flex">
                    <span className="text-center d-flex">
                      <i className="fas fa-calendar-alt "></i>&nbsp;&nbsp;{" "}
                      <p> 28th April 2021</p>
                    </span>
                    <span className="text-center d-flex">
                      <i className="fas fa-book px-3"></i> <p>35 Lessons</p>
                    </span>
                  </div>
                  <h5 className="card-title text-center text-success">
                    Creche
                  </h5>
                  <p className="card-text text-center">
                    For anyone validating framer as a professional prototyping
                    tool
                  </p>
                </div>
                <div className="">
                  <button className=" cardbtn">
                    {" "}
                    Enroll Now &nbsp; &nbsp;
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 w-75 cardy justify-content-between py-1 align-items-center">
                <img
                  src="../image/Ellipse 17 (1).png"
                  className="card-img-top imgcard"
                  alt="..."
                />
                <div className="card-body">
                  <div className="d-flex">
                    <span className="text-center d-flex">
                      <i className="fas fa-calendar-alt "></i>&nbsp;&nbsp;{" "}
                      <p> 28th April 2021</p>
                    </span>
                    <span className="text-center d-flex">
                      <i className="fas fa-book px-3"></i> <p>35 Lessons</p>
                    </span>
                  </div>
                  <h5 className="card-title text-center text-success">
                    Transition
                  </h5>
                  <p className="card-text text-center">
                    For anyone validating framer as a professional prototyping
                    tool
                  </p>
                </div>
                <div className="">
                  <button className=" cardbtn">
                    {" "}
                    Enroll Now &nbsp; &nbsp;
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 w-75 cardy justify-content-between py-1 align-items-center">
                <img
                  src="../image/Ellipse 18.png"
                  className="card-img-top imgcard"
                  alt="..."
                />
                <div className="card-body">
                  <div className="d-flex">
                    <span className="text-center d-flex">
                      <i className="fas fa-calendar-alt "></i>&nbsp;&nbsp;{" "}
                      <p>28th April 2021</p>
                    </span>
                    <span className="text-center d-flex">
                      <i className="fas fa-book px-3"></i> <p>35 Lessons</p>
                    </span>
                  </div>

                  <h5 className="card-title text-center text-success">
                    Nursery
                  </h5>
                  <p className="card-text text-center">
                    {" "}
                    For anyone validating framer as a professional prototyping
                    tool
                  </p>
                </div>
                <div className="">
                  <button className=" cardbtn">
                    {" "}
                    Enroll Now &nbsp; &nbsp;
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="LearnMorea">
            <button className="btn btn-success mt-2 mb-5    ">
              View all Courses
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionComp4;

const Wrapper = styled.div``;
