import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";


class AboutPage extends React.Component {
  render() {
    return (
        <div>
        {/* Container */}
        <div className="about-page-container is-widescreen">


          {/* BNS Center  */}
          <div className="about-page-center ">
            <div className="about-page-center-text">
              <h1>Our Center</h1>
            </div>
            <div className="about-page-center-text">
              <p>
                The Basic Needs Center serves as a physical resource hub for basic needs resources and services. The Basic
                Needs Center serves as a space for students to create community and access coordinated basic needs services.
                We are committed to cultivate wellness and belonging in the Basic Needs Center space.
              </p>
              <br />
              <Link to="/">
              <Button
                large
                className="button-primary"
                intent={Intent.PRIMARY}
                text="Book Appointment"
              />
            </Link>
            </div>

          </div>
          {/* BNS Background  */}
          <div className="about-page-background ">
            <div className="about-page-background-text">
              <h1>Background</h1>
            </div>
            <div className="about-page-background-text">
              <p>
                Basic Needs Security refers to the food, housing, and economic security of our community. We understand that
                basic needs have a direct impact on the mental-emotional-physical health, wellness, academic performance,
                professional development, and holistic success of students.
              </p>
              <p>
                The quality of life of our students has a major impact on their sense of belonging, persistence, graduation,
                and overall experience. Therefore, we refuse to accept hunger, malnourishment, and homelessness as part of
                our university.
              </p>
              <p>Basic Needs is committed to accomplishing food, housing and economic justice on the UC Berkeley campus
                through a robust model of prevention, intervention and emergency relief efforts. Our goal is to ensure that
                UC Berkeley is a Basic Needs Secure campus. Our prevention efforts thus far have included pre-college
                education, first year student outreach and messaging around Basic Needs, as well as Basic Needs skill
                development such as NST 20 lecture, and nutrition and cooking demonstration. Emergency interventions include
                the UC Berkeley Food Pantry which provides emergency food relief. Crisis interventions include the Food
                Assistance Program which provides eligible students with financial support for food, as well as the Emergency
                Housing Support program.</p>
            </div>

          </div>
          {/* Our Team  */}
          <div className="about-page-team ">
            <h1>Our Basic Needs Village</h1>
            <div className="about-page-team-container">
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-7.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4> Kiyoko Thomas</h4>
                      <p className="about-page-team-description">Basic Needs Manager (Case Management &amp; Operations)
                      </p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-3.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4>Ruben Canedo</h4>
                      <p className="about-page-team-description">Basic Needs Committee Chair </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-4.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4>Meg Prier
                      </h4>
                      <p className="about-page-team-description">Basic Needs Manager (Food)</p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-2.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4> Karina Candela
                      </h4>
                      <p className="about-page-team-description">Photography &amp; Videography Coordinator
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-6.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4>Sally Liang</h4>
                      <p className="about-page-team-description">Finance Coordinator
                      </p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-9.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4>Vikrem Padda</h4>
                      <p className="about-page-team-description"> CalFresh Coordinator
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-8.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4>Stella Zhu</h4>
                      <p className="about-page-team-description">Food Pantry Coordinator
                      </p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-5.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4>Ibrahim Ramoul
                      </h4>
                      <p className="about-page-team-description">Basic Needs Farms and Gardens Coordinator </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* row */}
              <div className="about-page-team-row">
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-8.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4>Maria Balcazar Tellez</h4>
                      <p className="about-page-team-description">Graduate Student Researcher
                      </p>
                    </div>
                  </div>
                </div>
                {/* column */}
                <div className="about-page-team-column">
                  <div className="about-page-team-card">
                    <img className="about-page-team-img" src="/Users/tonyanguyen/indexingbasicneeds/app/assets/images/team-1.jpg" alt="Img" style={{width: '100%'}} />
                    <div className="about-page-team-text-container">
                      <h4>Sara Tsai
                      </h4>
                      <p className="about-page-team-description">Basic Needs Farms and Gardens Coordinator </p>
                    </div>
                  </div>
                </div>
                {/* End of Row */}
              </div>
              {/* End of Team Container */}
            </div>
          </div>
          {/* Areas of Focus */}
          <div className="about-page-focus ">
            <div className="about-page-focus-text">
              <h1>Areas of Focus</h1>
            </div>
            <div className="about-page-focus-text">
              <p>UC Berkeley's Basic Needs Security Committee is made up of undergraduate, graduate student, professional
                staff, faculty, administrators, and community experts. </p>
              <p>Our areas of focus are:</p>
            </div>
            {/* Container for Focus */}
            <div className="about-page-focus-container">
              {/* row */}
              <div className="about-page-focus-row">
                {/* column */}
     
                  <div className="about-page-focus-card">
                    <div className="about-page-focus-text-container">
                      <h4>Food Support
                      </h4>
                      <br/>
                      <p className="about-page-focus-description">Food support refers to the provision of food or financial
                        support to
                        purchase food in emergency situations or to provide longer-term solutions in areas where food
                        resources are limited. A goal of food support is to create food security – a situation in which
                        people need not be vulnerable to hunger and starvation.
                        <br />
                        <br/>
                        Food insecurity refers to the limited or uncertain availability of safe and nutritionally adequate
                        foods; or limited or uncertain ability to obtain such food in a socially acceptable manner. In its
                        most extreme form, known as hunger, individuals can experience physiological conditions such as
                        uneasiness and pain.
                      </p>
                    </div>
                  </div>
        
                  <div className="about-page-focus-card">
                    <div className="about-page-focus-text-container">
                      <h4>Housing Support</h4>
                      <br/>
                      <p className="about-page-focus-description">Housing support refers to assistance to enable individuals
                        secure and
                        maintain suitable housing or shelter.
                        <br />
                        <br/>
                        Homelessness means that a student does not have a stable, reliable, or permanent place to live, often
                        residing in a shelter, automobile, motel, a public facility, or an abandoned building or outside.
                        Housing insecurity refers to a broader set of challenges that could include the inability to pay rent
                        or utilities, need to move frequently, or residing in a place where personal safety or health is
                        compromised.
                      </p>
                    </div>
                  </div>
             
              {/* row */}
             
      
                  <div className="about-page-focus-card">
                    <div className="about-page-focus-text-container">
                      <h4>Economic Support</h4>
                      <br/>
                      <p className="about-page-focus-description">Economic support refers financial security of having stable and
                        predictable income or other resources to support a standard of living now and in the foreseeable
                        future.
                        <br />
                        <br/>
                        Financial insecurity refers to the inability for students to access financial resources to be a
                        successful student, or find the resources to gain financial literacy, such as educational materials
                        to understand what resources are available and where to receive additional support.
                      </p>
                    </div>
                  </div>

            </div>
              

      
              {/* End of Container Div */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
