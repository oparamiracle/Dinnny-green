import React from "react";
import styled from "@emotion/styled";

const SectionComp5 = () => {
  return (
    <Wrapper>
      <div className=" sectionG ">
        <div>
          <h1 className="text-light text-center mb-2 pt-3 success">
            Success Story
          </h1>
        </div>
        <div className="sectiong-1">
          <div className=" pic-carrier d-flex justify-content-center align-items-center">
            <div>
              <img src="../image/john.png" className="pic1 genpic" alt="" />
            </div>
            <div>
              <img
                src="../image/Mask Group (4).png"
                className="pic2 genpic"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="../image/james-timothy-m8uLhKTiL8Y-unsplash 1.png"
                className="pic3 genpic"
                alt=""
              />
            </div>
          </div>
        </div>

        <div sectionh-1>
          <p className="text-center text5">
            we have quit hospitals arranged, doctors appointmentsa have the
            diagnose and treat yourem ipsu r aol amd meniam, qoais <br />
            around exercitation. We doctor appointments have the diagnose and
            treat yourem exercitatranged docts the <br />
            diagnose and treat ipsu aoi.{" "}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionComp5;

const Wrapper = styled.div`
  background-image: url("../image/Rectangle 82.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vh;
  min-height: 60vh;
`;
