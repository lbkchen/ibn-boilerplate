import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import ValuesImage from "../images/home-background.png";

import Undergrad from "../images/home-undegrad.png";
import Staff from "../images/home-staff.png";
import Grad from "../images/home-grad.png";
import Center from "../images/home-ourcenter-2.png";
import Donate from "../images/home-donate.png";

class FAQPage extends React.Component {
  render() {
    return (
      <div className="container">
       
       <div className="FAQ-page-landing">
       <h1 className="berkeley-blue">Frequently Asked Questions</h1>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Don’t see what you need? Submit a queston here.
       </p>
       </div>

       <div className="FAQ-container">
        <div className="FAQ-card">
        
          <h2 className="FAQ-question">I’m interested in applying for CalFresh but don’t know where to begin.</h2>
       
          <div className="FAQ-answer">
          <p>We have CalFresh Ambassadors who have application assistance hours every week.</p>
          </div>
        
        </div>

        <div className="FAQ-card">
      
         <h2 className="FAQ-question"> Who do I contact if I’m interested in the following: </h2>
         <p><ul>
           <li>Basic Needs presentation/guest lecture</li>
           <li>Media inquiry/interview</li>
           <li>Food Pantry tour</li>
           <li>Basic Needs resources</li>
           <li>Panelist participation</li>
           <li>Basic Needs data</li>

         </ul></p>

      
          <div className="FAQ-answer">
          <p>
            Complete this Basic Needs Inquiry <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6hMxM_S2NvaxKjqNMZClc-UybEzqGV6nZT-iqob9i8iibXg/viewform?vc=0&c=0&w=1">form.</a>
            </p>
          </div>
        
        </div>

        
       </div>

        {/* End of Container */}
      </div>
    );
  }
}

export default FAQPage;
