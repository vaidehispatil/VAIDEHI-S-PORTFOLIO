import React from 'react';
import profilePic from './images/profile.jpg';

import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-container">
        
        <div className="profile-image-container">
          {/* Replace with your image URL */}
          <img className="profile-image" src={profilePic} alt="Profile" />
        </div>

        <div className="profile-info">
          
          <div className="info-flex-container">
            {/* About Me Section */}
            <div className="profile-section">
              <h3 className="profile-heading">About Me</h3>
              <p className="profile-intro">
                Hi, I'm Vaidehi Patil, a Bachelor of Computer Applications student at Pillai College of Arts, Commerce & Science. I am a passionate and results-driven web developer with a strong academic foundation and hands-on experience in modern web development. I am currently leveraging my skills in React and JavaScript to build responsive, user-centric applications, while consistently achieving top-tier academic results. I am eager to contribute to innovative projects and create impactful digital solutions.
              </p>
            </div>

            {/* Education Section */}
            <div className="profile-section">
              <h3 className="profile-education-heading">Education</h3>
              <ul className="profile-education-list">
                <li>
                  <p><strong>Bachelor of Computer Applications </strong><strong>(2024 - Present)</strong></p>
                  <p>Pillai College of Arts, Commerce & Science, New Panvel</p>
                  <p>Semester 1 SGPA: 8.77 | Semester 2 SGPA: 8.68</p>
                </li>
                <br></br>
                <li>
                  <p><strong>Higher Secondary in Commerce</strong><strong> (2023 - 2024) </strong> </p>
                  <p>Mahatma Education Society, Khanda colony, Navi Mumbai</p>
                  <p>HSC Board (84.17%)</p>
                </li>
                <br></br>
                <li>
                  <p><strong>Secondary Education</strong> <strong> (2021 - 2022)</strong> </p>
                  <p>St.Joseph High School, Khanda Colony, Navi Mumbai</p>
                  <p>SSC Board (80.40%)</p>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="profile-skills-heading">Skills</h3>
          <ul className="profile-skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Python</li>
            <li>Excel</li>
            <li>MySQL</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Tally</li>
          </ul>

        </div>
        
      </div>
    </div>
  );
};

export default Profile;