import React from "react";
import styled from "@emotion/styled";

const SectionComp8 = () => {
  return (
    <Wrapper>
      <div className="section-I container mb-5 pb-5">
        <div>
          <h1 className="text-success text-center">Contact Us</h1>
        </div>
        <form className="form-control formi mt-5 pt-5 justify-content-between py-1 align-items-center">
          <span className="d-flex">
            <input type="text" className="txt-a" placeholder=" Name" />
            <input type="text" className="txt-a" placeholder=" Email" />
          </span>{" "}
          <br />
          <span className="d-flex">
            <input type="text" className="txt-a" placeholder="Phone" />
            <input type="text" className="txt-a" placeholder="Subject" />
          </span>
          <br />
          <input
            type="textarea"
            className="txt-b mb-5"
            placeholder="Enter your Message"
          />
        </form>
        <div className="btform pt-5">
          <button className="btn btn-success">Send Now</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionComp8;
const Wrapper = styled.div`
  background-color: rgba(143, 191, 38, 0.08);
`;
