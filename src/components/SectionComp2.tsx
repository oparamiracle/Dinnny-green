import React from "react";
import styled from "@emotion/styled";

const SectionComp2 = () => {
  return (
    <Wrapper>
      <div className="section-c container ">
        <div className="section-c1 text-center">
          <h1 className="our-features">Our Feartures</h1>
          <p className="dinny-green">
            Dinny Green International School is nuertured in grace and truth,
            raising green, <br />
            flourishing and successful children.{" "}
          </p>
        </div>

        <div className="row row-cols-lg-2 p-0 gap-3 justify-content-center align-items-center">
          {data.map((card) => (
            <div className="semicard col " key={card.id}>
              <div className="d-flex  p-2">
                <div className="">
                  <img
                    src="../image/Ellipse 23.png"
                    className="ellipse pe-3"
                    alt=""
                  />
                </div>
                <div className="">
                  <h5>Awesome Teacher</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. sed do eiusmod ukkf <br />
                    temporincidiunt u.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionComp2;

const Wrapper = styled.div`
  background-image: url("../image/3 img.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 70vh;
  margin-top: 10rem;
`;

export const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];
