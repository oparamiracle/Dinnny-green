import React from "react";
import styled from "@emotion/styled";

const HeaderComp1 = () => {
  return (
    <div>
      <nav className="Topnavi">
        <div className="container d-flex justify-content-between py-2 align-items-center">
          <div className="d-flex align-items-center">
            <small className="text-A mr-5 m-0 mx-5">
              <span className="txtnav1"> Call: +234 9012624162</span>
            </small>
            <small className="text-A me-5 ">
              <span className="">Support: info@yourcompany.com</span>
            </small>
          </div>

          <div className="login-register mx-5">
            <button className="btn btn-sm btn-transparent text-primary mx-5">
              Log In
            </button>
            <button className="btn btn-sm btn-success text-light rounded ml-2 px-4">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComp1;
