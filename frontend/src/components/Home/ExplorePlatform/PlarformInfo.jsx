import React from "react";
import { Link } from "react-router-dom";
import "./PlatformInfo.css";
const PlarformInfo = () => {
  return (
    <>
      <div className="explore-heading">
        <h1>Wlcome to Alumni Platform</h1>
      </div>
      <div className="main-explore">
        <div className="explore-first-half">
          <div className="explore-links">
            <Link to="/find_alumni">
              <h3>Alumni Directory</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate, qui?
              </p>
            </Link>
          </div>
          <div className="explore-links">
            <Link to="/profilePage">
              <h3>Your Alumni Profile</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate, qui?
              </p>
            </Link>
          </div>
        </div>
        <div className="explore-second-half">
          <div className="explore-links">
            <Link to="alumni_talk">
              <h3>Alumni Talk</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate, qui?
              </p>
            </Link>
          </div>
          <div className="explore-links">
            <Link to="/feed">
              <h3>Updates By Alumni</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate, qui?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlarformInfo;
