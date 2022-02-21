import React from "react";
import styled from "@emotion/styled";

const HeaderComp3 = () => {
  return (
    <Wrapper className=" section-3">
      <div className="section-a">
        <h1 className="Give ">
          Give your Child A Chance To <br />
          Be Unique{" "}
        </h1>
        <p className="Experts">
          Experts agree that a child's personality doesn't <br />
          fully form until they are in elementary school. <br /> Sign in to
          enroll your child{" "}
        </p>
        <div>
          <button className="btn-lg  sign-up">Sign up</button>
          <button className="btn-lg  Learn-more">Learn more</button>
        </div>
      </div>
      <div className="blur-div"></div>
    </Wrapper>
  );
};

export default HeaderComp3;

const Wrapper = styled.div`
  background-image: url("../image/thisisengineering.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
`;
