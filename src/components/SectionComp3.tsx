import React from "react";
import styled from "@emotion/styled";

const SectionComp3 = () => {
  return (
    <Wrapper>
      <div className="section-d">
        <div className="sectiion-d-a d-flex container mt-5 mb-5  pt-5">
          <div className="section-d-1">
            <h1 className="Find">
              Find Out More About <br /> Our Learning Experience{" "}
            </h1>
            <p className=" we-have">
              we have built hospitals arranged doctor <br />
              appointements have the diagnose and treat yourem ipsu <br />
              ad meniam quis nostrud exercitation{" "}
            </p>
            <div>
              <span className="">
                <img src="../image/good-vect.png" className="vect1" alt="" />
                &nbsp; &nbsp; Culture in diversity
              </span>{" "}
              <br />
              <span className="">
                <img src="../image/good-vect.png" className="vect1" alt="" />
                &nbsp; &nbsp; We have built hospitals arranged doctor
              </span>
              <br />
              <span className="">
                <img src="../image/good-vect.png" className="vect1" alt="" />
                &nbsp; &nbsp; We have built hospitals arranged doctor
              </span>
              <br />
              <button className="btn btn-lg btn-success LearnMoree">
                LearnMore
              </button>
            </div>
          </div>

          <div className="section-d-2">
            <img src="../image/Sect 4 img.png" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionComp3;

const Wrapper = styled.div``;
