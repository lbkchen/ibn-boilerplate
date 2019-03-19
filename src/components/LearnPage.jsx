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
              <Link to="https://basic-needs.s3.us-west-2.amazonaws.com/SjRxf1rtAuK64PqqJ45b6Ni5?response-content-disposition=inline%3B%20filename%3D%22HousingSurvey_03022018.pdf%22%3B%20filename%2A%3DUTF-8%27%27HousingSurvey_03022018.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIJYBW6E262AXKSAQ%2F20190319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190319T212242Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=bcd25e253de9ab2561c6cc5fefac14e7ac925ec50d64d14d4f2b7aa58f50268d">
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
