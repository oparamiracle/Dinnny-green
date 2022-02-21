import React from "react";

const HeaderComp2 = () => {
  return (
    <div>
      <nav className="container-fluid sectionA">
        <div className="container">
          <div className="nav-content">
            <img src="../image/logo.png" alt="" />

            <ul className="m-0">
              <li className="nav-item">
                <a>Home</a>
              </li>
              <li className="nav-item">
                <a>About</a>
              </li>
              <li className="nav-item">
                <a>Services</a>
              </li>
              <li className="nav-item">
                <a>Instructors</a>
              </li>
              {/* <li>
                <a href="/#courses">
                  Couses<i className="fas fa-caret-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Mathematics</a>
                  </li>
                  <li>
                    <a href="#">Agric Science</a>
                  </li>
                  <li>
                    <a href="#">Pysics</a>
                  </li>
                  <li>
                    <a href="#">Biology</a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a>Blog</a>
              </li>
              <button className="btn btn-lg btn-primary  text-light rounded rounded ml-2 px-4">
                Contact
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComp2;
