import React from "react";
import styled from "@emotion/styled";

const SectionComp1 = () => {
  return (
    <Wrapper className=" mt-5">
      <div className="section-b row">
        <div className="col section-b1 d-flex justify-content-center align-items-center">
          <img src="../image/Mask Group (1).png" alt="" className="img-2" />
          <img src="../image/Mask Group.png" className="img-3" alt="" />{" "}
          <img src="../image/Rectangle 12.png" className="img-4  " alt="" />
        </div>
        <div className="col section-b2">
          <h1 className="Advance-Learning">
            Advance Learning system <br /> Around The World{" "}
          </h1>
          <p className=" We-have-made mt-3">
            We have made a collaborative effort in briinging together <br />
            scientific expertise from other countries, steered jointly <br />
            by their goverments on the basis of shared. <br />
            policy-driven interest.{" "}
          </p>
          <div className="d-flex mt-4">
            <div className="px-3 text-success">
              <h1>
                25k <sup>+</sup>
              </h1>{" "}
              <p>Teachers</p>{" "}
            </div>
            <div className="px-3 text-success">
              <h1>
                74k <sup>+</sup>
              </h1>{" "}
              <p>Active Courses</p>
            </div>
            <div className="px-3 text-success">
              <h1>
                250k <sup>+</sup>
              </h1>{" "}
              <p>Extra Curiculum</p>
            </div>
          </div>

          <button className="btn  btn-lg LearnMore">Learn More</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionComp1;

const Wrapper = styled.div``;
