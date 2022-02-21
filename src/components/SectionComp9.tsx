import React from "react";
import styled from "@emotion/styled";

const SectionComp9 = () => {
  return (
    <Wrapper className="container-fluid">
      <div className="footer container d-flex justify-content-center align-items-center w-100 h-70 d-flex ">
        <div className="  g-4 pt-5 pb-5  section-J">
          <div className="cols me-5 ">
            <img src="../image/Group 61.png" className="mb-5" alt="" />
            <p>
              Replenish him third creature and meat <br />
              blessed void a fruit gathered you're, <br /> they're two waters
              own morning <br />
              gathered greater.{" "}
            </p>
          </div>
          <div className="cols mr-4 mx-4">
            <h4 className="mb-3">About Us</h4>
            <hr />
            <p className="mt-5 pxp">
              Afficiates <br />
              Partners <br /> Reviews
              <br />
              Blogs{" "}
            </p>
          </div>
          <div className="cols mr-4 mx-4">
            <h4>Popular Classes</h4>
            <hr />
            <p className="mt-5 pxp">
              Crech <br /> Prmary <br />
              Secondary <br />
              Highschool{" "}
            </p>
          </div>
          <div className="cols mt-1  mx-5">
            <h4>Newsletter</h4>
            <hr />
            <p className="mt-5 pxp">
              Sign up to newsletter to get <br />
              Latest updates
            </p>
            <span className="d-flex">
              <input type="text" placeholder="please search heere" />
              {/* &nbsp; &nbsp; */}
              <button className=" btn btn-success btnarrow">
                {" "}
                <i className="fas fa-mouse-pointer bg-success w-25 p-1 text-light"></i>
              </button>{" "}
              <br />
            </span>
            <div className="d-flex mt-3">
              <i className="fab fa-facebook-f"></i> &nbsp; &nbsp;
              <i className="fab fa-twitter"></i>&nbsp; &nbsp;
              <i className="fab fa-linkedin-in"></i>&nbsp; &nbsp;
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-1" />
      <p className="text-light text-center pb-5">
        Copywright @ 2020 Dinnygreen international
      </p>
    </Wrapper>
  );
};

export default SectionComp9;
const Wrapper = styled.div`
  background-color: #003412;
`;
