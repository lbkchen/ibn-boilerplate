import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

class LearnPage extends React.Component {
  render() {
    return (
      <div className="learn-page-container">
        <div className="learn-page-left-container">
          <div className="learn-page-menu">
            <a className="learn-page-item" href="#learn-page-research"> Research</a>
            <a className="learn-page-item" href="#learn-page-multimedia"> Multimedia</a>
            <a className="learn-page-item" href="#learn-page-news"> News</a>
          </div>
        </div>
        <div className="learn-page-right-container">
        
          <div className="learn-page-banner-overlay">
            <div className="learn-page-banner">
              <div className="learn-page-banner-text">             <h2 className="learn-page-white-text">Basic Needs Security — <br />
                Learning Materials</h2>
              <p className="learn-page-white-text">UC Berkeley Basic Needs efforts have been
                featured in the three
                largest
                studies in the
                country on college student basic needs. Additionally, UC Berkeley was selected by the
                Federal Government Accountability Office to be included in their first national study on
                college student food insecurity.
              </p>
              <br/>
              <br/>
              <Link to="/resources">
                    <Button
                      large
                      className="button-primary"
                      intent={Intent.PRIMARY}
                      text="View Latest Report"
                      style={{ marginRight: "10px" }}
                    />
                </Link>
            </div>
          </div>
          </div> 

          <div className="learn-page-text">
            <div id="learn-page-research">
              <h2>Research</h2>
              <p>UC Berkeley Basic Needs efforts have been featured in the three largest studies in the
                country on college student basic needs. Additionally, UC Berkeley was selected by the
                Federal Government Accountability Office to be included in their first national study on
                college student food insecurity. `
              </p>
              <h4>Campus Research</h4>
              <br />
              <table className="learn-page-text">
                <tbody><tr>
                    <th>Name</th>
                    <th>Date</th>
                  </tr>
                  <tr>
                    <td>UC Berkeley Chancellor’s Housing Survey
                    </td>
                    <td>Feb 22</td>
                  </tr>
                  <tr>
                    <td>UC Berkeley Total Cost of Attendance Report
                    </td>
                    <td>Feb 22</td>
                  </tr>
                  <tr>
                    <td>UC Berkeley Housing Survey 2017 Preliminary Findings
                    </td>
                    <td>Feb 22</td>
                  </tr>
                  <tr>
                    <td>UC Info Center (Undergraduate alumni at work)
                    </td>
                    <td>Feb 22</td>
                  </tr>
                </tbody></table>
              <br />
            </div>
            <div id="learn-page-multimedia">
              <h2>Multimedia</h2>
              <p>Read and hear more about basic needs in the news!
              </p>
            </div>
            <div id="learn-page-news">
              <h2>Basic Needs in the News</h2>
              <p>Read and hear more about basic needs in the news!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnPage;
