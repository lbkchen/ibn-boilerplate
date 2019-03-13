import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import Donate from "../images/home-donate.png";

class DonatePage extends React.Component {
  render() {
    return (
      <div className="container home-page">

        {/* Donate */}
        <div className="home-page-donate block">
          <h1 style={{ width: "100%" }}>Donate to Basic Needs Security</h1>
          <div className="home-page-right">
            <div
              className="home-page-donate-text"
              style={{
                borderBottom: "1px #C4C4C4 solid",
                marginBottom: "32px",
              }}
            >
              <p>
                Your contribution will go to help transform UC Berkeley into a
                basic needs secure institution.
              </p>

              <Link to="/" style={{ display: "block", marginTop: "24px" }}>
                <Button
                  large
                  className="button-primary"
                  intent={Intent.PRIMARY}
                  text="Donate now"
                />
              </Link>
              <br />
            </div>

            <div className="home-page-donate-label">Donate By Mail</div>

            <div className="home-page-donate-info">
              <div className="row">
                <div className="donate-by-mail left">
                  <div className="info">Check to:</div>
                </div>
                <div className="donate-by-mail right">
                  <div className="info">UC Berkeley Foundation</div>
                </div>
              </div>

              <div className="row">
                <div className="donate-by-mail left">
                  <div className="info">Memo:</div>
                </div>
                <div className="donate-by-mail right">
                  <div className="info">Basic Needs</div>
                </div>
              </div>

              <div className="row">
                <div className="donate-by-mail left">
                  <div className="info">Address:</div>
                </div>
                <div className="donate-by-mail right">
                  <div className="info">
                    University of California, Berkeley, Gift Services 1995
                    University Ave, Ste 40, Berkeley, CA 94704-1070
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img className="home-donate-image" src={Donate} />
        </div>

        {/* End of Container */}
      </div>
    );
  }
}

export default DonatePage;
