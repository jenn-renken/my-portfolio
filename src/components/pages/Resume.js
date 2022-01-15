import React from "react";

const Resume = () => (
  <div className="container"> 
    <div className="content">
        <a href="/Resume.pdf" target="_blank">Download my resume!</a>
        <h1>Resume</h1>
            <h2>Jennifer G. Renken</h2>
            <h4>Education</h4>
                <p>The George Washington University, Washington DC
                    <br />
                    Bachelor of Art/ Art History
                </p>
            <h4>Work Experience</h4>
            <p><strong>NCARB</strong> | Washington, DC | Quality Assurance Analyst II | July 2014-present </p>
            <ul>
                <li>Partners with the Business Analyst and UX Designer to ensure software meets the business requirements and is intuitive and easy to use</li>
                <li>Runs end-to-end system tests to ensure all software is functioning properly as new features and enhancements are added</li>
                <li>Documents defects using GitHub and follows up with developers to ensure they have been addressed</li>
                <li>Develops and delivers training to appropriate stakeholders for new systems or features</li>
                <li>Tests mobile applications for both IOS and Android platforms </li>
            </ul>
            <p><strong>Skills:</strong> GitHub, Slack, Test Flight, Mandrill, MailChimp, ZenDesk, Browser Stack, TeamCity, InVision, Certified Agile Scrum Master </p>
            <p><strong>SOCMA</strong> | Washington, DC | Assistant Manager, Meetings | March 2006 - January 2009 </p>
            <ul>
                <li>Served as TIMSS database administrator- responsible for general database maintenance, creating events, creating invoices, updating demographic information, creating new users, training of new staff users, troubleshooting staff issues</li>
                <li>Built and maintained Cvent registration website for each event</li>
                <li>Designed event promotion material including programs, signs, brochures and registration packets</li>
                <li>Assisted Information Technology department with fielding staff questions and troubleshooting computer/network problems</li>
                <li>Set up and assisted staff with A\V equipment used for meetings</li>
                <li>Acted as backup network administrator</li>
            </ul>
    </div>
  </div>
);

export default Resume;
