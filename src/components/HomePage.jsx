import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import Logo from "../images/bnc-logo-white.png";
import ValuesImage from "../images/home-background.png";
import Ruben from "../images/team-ruben.jpg";
import Undergrad from "../images/Home_6_Resource.jpg";
import Staff from "../images/Home_7_Resource.JPG";
import Grad from "../images/Home_8_Resource.jpg";
import Center from "../images/home-ourcenter-2.png";
import Donate from "../images/home-donate.png";
import Test_1 from "../images/Home_10_Testimonial.jpg";
import Test_2 from "../images/Home_11_Testimonial.jpg";
import Test_3 from "../images/Home_12_Testimonial.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div className="container home-page">
        {/* Landing Block */}
        <div className="home-page-banner-overlay">
          <div className="home-page-landing block">
            <h1 className="white-text">Basic Needs Center</h1>
            <div className="home-page-row">
              <div className="home-page-landing-text">
                <p className="white-text">
                Welcome to Basic Needs community at UC Berkeley! Over the past six years, starting off initially as a food pantry, Basic Needs efforts have expanded to meet the need of the UC Berkeley community. It has been the mission of the Basic Needs efforts on campus to work towards economic, food and housing justice.
                </p>
                <br />
                <div className="btn-row">
                  <Link to="/resources">
                    <Button
                      large
                      className="button-primary"
                      intent={Intent.PRIMARY}
                      text="Our Resource Index"
                      style={{ marginRight: "10px" }}
                    />
                  </Link>
                  <Link to="/FAQPage">
                    <Button
                      large
                      className="button-primary"
                      intent={Intent.PRIMARY}
                      text="Frequently Asked Questions"
                    />
                  </Link>
                </div>
              </div>
              <div className="home-page-left-img">
              <img className="home-page-logo" src={Logo} alt="logo" />
            </div>
            </div>
          </div>
        </div>

        {/* Background Block */}
        <div className="home-page-background block">
          <h1>Our Vision, Our Mission, Our Values</h1>
          <div className="home-page-background-text">
            <p>
            We are excited for the ongoing learning, building, and improvement of our collective efforts. Please note that this site will continue to shift and improve as we earn better knowledge, strategies, and materials along our collective energy. We are excited for community input on our current vision, mission and values which will evolve over time.
<br/>
<br/>
Vision: Ongoing economic, food and housing justice for all UC Berkeley community members no matter who they are or where they come from
We are excited for the ongoing learning, building, and improvement of our collective efforts. Please note that this site will continue to shift and improve as we earn better knowledge, strategies, and materials along our collective energy. We are excited for community input on our current vision, mission and values which will evolve over time.
<br/>
<br/>
Mission: We provide accessible and equitable programming and resources today; we research, innovate, advocate and engage in coalition building to lead systemic change tomorrow. 
We are excited for the ongoing learning, building, and improvement of our collective efforts. Please note that this site will continue to shift and improve as we earn better knowledge, strategies, and materials along our collective energy. We are excited for community input on our current vision, mission and values which will evolve over time.
<br/>
<br/>Values: compassion, dignity, diversity, generative, healing, Interdependency, multigenerational, resilience 
            </p>
            <br />
            <Link to="/about">
              <Button
                large
                className="button-primary"
                intent={Intent.PRIMARY}
                text="Meet the BNS Village"
              />
            </Link>
          </div>
          <img className="home-values" src={ValuesImage} alt="values" />
        </div>

        {/* Resource Index Block */}
        <div className="home-page-resource-index block">
          <div className="home-page-resource-text">
            <h1>Our Resource Index</h1>
            <p>
            We know that navigating the UC Berkeley community can be overwhelming. That’s why we’ve consolidated all resources into a single place, so you can focus on your well-being first. {" "}
            </p>
    
          </div>

          <div className="home-page-resource-cards">
            <div className="home-page-resource-card">
              <div className="card-img">
                <img
                  className="home-page-student"
                  src={Undergrad}
                  alt="Undergraduate"
                />
              </div>

              <div className="card-container">
                <p className="card-text">Undergraduate Student</p>
              </div>
            </div>

            <div className="home-page-resource-card">
              <div className="card-img">
                <img className="home-page-student" src={Grad} alt="Graduate" />
              </div>
              <div className="card-container">
                <p className="card-text">Graduate / Professional Student</p>
              </div>
            </div>

            <div className="home-page-resource-card">
              <div className="card-img">
                <img className="home-page-student" src={Staff} alt="Staff" />
              </div>
              <div className="card-container">
                <p className="card-text">Service Worker / Staff</p>
              </div>
            </div>
          </div>
          <Link
            to="/resources"
            style={{ margin: "0px auto", marginTop: "32px" }}
          >
            <Button
              large
              className="button-primary"
              intent={Intent.PRIMARY}
              text="Search all resources"
            />
          </Link>
        </div>

        {/* BNS Center Block */}

        <div className="home-page-center block">
          <div className="home-page-center-text">
            <h1 className="white-text">Our Center</h1>
          </div>

          <div className="home-page-center-text">
            <p className="white-text">Location: 12345 MLK Way, Berkeley, CA</p>
            <p className="white-text">
              Open Hours: Monday - Friday, 9 AM - 9 PM
            </p>
            <p className="white-text">
            Location: Lower level of MLK Student Union (BNorth), Suite 72</p>
            <p className="white-text">
            Mailing Address: 2495 Bancroft Way, Suite 72, Berkeley CA 94720-4500</p>

            <p className="white-text">
            Our center’s hours will be extended throughout the semester.
The Basic Needs Center serves as a physical resource hub for basic needs resources and services. The Basic Needs Center serves as a space for students to create community and access coordinated basic needs services. 
<br/>
Below are our current services based out of our center:
<br/>
Case management
<br/>
CalFresh
<br/>
Satellite Drop-In Services
<br/>
Berkeley Rent Board
<br/>
Financial Aid & Scholarships Office
<br/>
CalFresh Appeals Clinic</p>
            




    
            <br />
            <Link to="https://ucberkeleybasicneeds.youcanbook.me/">
              <Button
                large
                className="button-primary"
                intent={Intent.PRIMARY}
                text="Book Appointment"
              />
            </Link>
          </div>

          <div className="home-page-left-img">
            <img className="home-page-center" src={Center} alt="Center" />
          </div>
        </div>

        {/* Student Testimonies */}

        <div className="home-page-testimonies block">
          <div className="home-page-testimonies-text">
            <h1>Student Testimonials</h1>
          </div>

          <div className="home-page-testimony-cards">
            <div className="home-page-testimony-card">
              <div className="testimonial_img">
              <img className="testimonial_img" src={Test_1} alt="values" />
              </div>

              <div className="card-test-container">
                <p className="card-test-text">
                  CalFresh improved the quality of my college life tremendously.
                  Once I received my EBT card, I stopped having to worry about
                  how I’d afford my next meal, and could instead focus on how I
                  would ace my next midterm. No university student should have
                  to prioritize food or shelter above their education, and
                  CalFresh is making this a reality for many students. CalFresh
                  has mitigated my stress tenfold and I am eternally grateful. -
                  Devin, Class of 2018
                </p>
              </div>
            </div>

            <div className="home-page-testimony-card">
              <div className="testimonial_img">
              <img className="testimonial_img" src={Test_2} alt="values" />
              </div>
              <div className="card-test-container">
                <p className="card-test-text">
                  I was struggling to make ends meet during the last month of
                  spring semester and suffered from food insecurity everyday. I
                  had no idea when my next meal was going to be and I was too
                  afraid to ask for help. After some guidance from my EOP
                  counselor, I was connected to the Financial Aid Scholarships
                  and Food Assistance Program. Within one day of emailing them,
                  I was supplied with additional funds to my student account.
                  Without this program, I would have continued to suffer in
                  silence. This program is crucial to students coming from
                  low-income homes and I'm grateful for the assistance I was
                  provided in my time of need. - Anonymous, Class of 2019
                </p>
              </div>
            </div>

            <div className="home-page-testimony-card">
              <div className="testimonial_img">
              <img className="testimonial_img" src={Test_3} alt="values" />
              </div>
              <div className="card-test-container">
                <p className="card-test-text">
                  How many times have you heard the phrase, "I can't afford to
                  eat healthily?" In addition to interacting with my peers,
                  crafting scrumptious recipes, and having a good time, I was
                  also able to walk away with a new outlook on cooking and
                  nutrition. I no longer associate nutritionally adequate foods
                  with being expensive, monotonous and inaccessible. This class
                  has taught me how to utilize ingredients more effectively and
                  creatively--often resulting in unique and tasty flavor
                  profiles. - Kevin Soun, Fall 2017
                </p>
              </div>
            </div>
          </div>

          <Link to="/" style={{ margin: "0 auto", marginTop: "50px" }}>
            <Button
              large
              className="button-primary"
              intent={Intent.PRIMARY}
              text="Read our stories"
            />
          </Link>
        </div>

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

export default HomePage;
