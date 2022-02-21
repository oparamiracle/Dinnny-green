import React from "react";
import styled from "@emotion/styled";

const SectionComp5 = () => {
  return (
    <Wrapper>
      <div className="container section-F">
        <div>
          <h1 className="text-center text-success Find-out-How">
            Find out How we help students
          </h1>
          <p className="text-center txt3">
            authentic "voice chance matter and a big part of this is leaving
            "rom for interpretation in the assignment. these <br />
            gray areas can confuse students unaccustomed to agency and choice,
            but once they become comfortable with it, it can <br />
            be a significant factor in helping them show what their best
            actually is.{" "}
          </p>
        </div>
        <div className=" thumbnailly  d-flex justify-content-center py-2 align-items-center videothumb">
          <img
            src="../image/Group 62.png"
            className="clip2 justify-content-center py-2 align-items-center"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionComp5;

const Wrapper = styled.div`
  .thumbnailly {
    background-image: url("../image/video thumbnail.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 70%;
    height: 60vh;
  }
`;
