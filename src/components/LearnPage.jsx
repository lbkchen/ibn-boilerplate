import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import research_icon from "../images/research-icon.png";
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
                    {/* <th>Date</th> */}
                  </tr>
                  <tr>
                    <td>
                    <img className="research-icon" src={research_icon}>
                    </img>
                      UC Berkeley Chancellor’s Housing Survey
                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>UC Berkeley Total Cost of Attendance Report
                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>UC Berkeley Housing Survey 2017 Preliminary Findings
                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>UC Info Center (Undergraduate alumni at work)
                    </td>
            
                  </tr>
                </tbody></table>
              <br />

              <h4>Statewide Research</h4>
              <br />
              <table className="learn-page-text">
                <tbody><tr>
                    <th>Name</th>
                    {/* <th>Date</th> */}
                  </tr>
                  <tr>
                    <td> <img className="research-icon" src={research_icon}>
                    </img>Student Food Access and Security Study
                    </td>
            
                  </tr>
                  <tr>
                    <td> 
                    <img className="research-icon" src={research_icon}>
                    </img>No Food for Thought
                    </td>
            
                  </tr>
                </tbody></table>
              <br />

              <h4>National Research</h4>
              <br />
              <table className="learn-page-text">
                <tbody><tr>
                    <th>Name</th>
                    {/* <th>Date</th> */}
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Food and Housing Insecurity in College

                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Prevalence and Correlates of Food Insecurity Among Students Attending a Midsize Rural University in Oregon
                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>"Factors Related to the High Rates of Food Insecurity among Diverse, Urban College Freshmen"

                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Food Insecurity at CUNY: Results from a Survey of CUNY Undergraduate Students
                    </td>
            
                  </tr>


                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Development, Evaluation, and Validation of Environmental Assessment Tools to Evaluate the College Nutrition Environment

                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Food insecurity prevalence among college students at the University of Hawai’i at Manoa
                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Student food insecurity: The skeleton in the university closet
                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Food insecurity: is it an issue among tertiary students?

                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Food insecurity among university students in Victoria: A pilot study

                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Children Are Aware of Food Insecurity and Take Responsibility for Managing Food Resources
                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Nine Charts about Wealth Inequality in America

                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Bridging the Racial Generation Gap Is Key to America's Economic Future

                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>Interactive Map: SNAP Rose In States to Meet Needs but Participation Has Fallen as Economy Recovered
                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>The Eviction Lab

                    </td>
            
                  </tr>
                  <tr>
                    <td><img className="research-icon" src={research_icon}>
                    </img>National Center for Education Statistics (Earning by education level)

                    </td>
            
                  </tr>
                
                </tbody></table>
              <br />

            </div>
            <div id="learn-page-multimedia">
              <h2>Multimedia</h2>
              {/* <p>Read and hear more about basic needs in the news!
              </p> */}

              <iframe width="100%" height="290" src="https://www.npr.org/player/embed/513902272/514731729" frameborder="0"></iframe>

              <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/297579027&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              
            </div>
            <div id="learn-page-news">
              <h2>Basic Needs in the News</h2>
              {/* <p>Read and hear more about basic needs in the news!
              </p> */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/S6_fMj8VRSk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            

              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnPage;
