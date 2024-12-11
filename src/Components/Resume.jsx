import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>Swaraj Kumar</h1>
                <p>
                    <a href="tel:+917992470659">+91 7992470659</a> | 
                    <a href="mailto:028swarajkumar@gmail.com"> 028swarajkumar@gmail.com</a> | 
                    <a href="https://github.com/swaraj29" target="_blank" rel="noopener noreferrer">GitHub</a> | 
                    <a href="https://linkedin.com/in/swaraj-kumar-84237b22b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </header>

            <section className="resume-section">
                <h2>Summary</h2>
                <p>
                    Ambitious MERN stack developer and data scientist seeking to leverage expertise in full-stack development, machine learning, and data analysis to drive business growth and enhance user experiences. Skilled in MongoDB, Express, React, Node, and collaborative problem-solving. Committed to learning and contributing to innovative projects in a dynamic environment.
                </p>
            </section>

            <section className="resume-section">
                <h2>Education</h2>
                <div>
                    <h3>Parul Institute of Technology, Vadodara</h3>
                    <p>B.Tech in Computer Science Engineering (Current CGPA: 7.43/10.0)</p>
                    <p>11/2021 - Current</p>
                </div>
                <div>
                    <h3>Ishan International Public School, Patna</h3>
                    <p>High School Certification (78%)</p>
                    <p>04/2019 - 06/2020</p>
                </div>
            </section>

            <section className="resume-section">
                <h2>Experience</h2>
                <div>
                    <h3>Parul University, MERN Stack Developer Intern</h3>
                    <p>May 2024 - Aug 2024</p>
                    <ul>
                        <li>Developed authentication and authorization functionality from scratch using Node.js and Express.js.</li>
                        <li>Enhanced the UI of the attendance management system using ReactJS and Tailwind CSS.</li>
                        <li>Designed and implemented robust database models using MongoDB.</li>
                    </ul>
                </div>
            </section>

            <section className="resume-section">
                <h2>Skills</h2>
                <ul>
                    <li><strong>Programming Skills:</strong> C/C++, Python, JavaScript, MySQL, NoSQL (MongoDB), Java, HTML/CSS</li>
                    <li><strong>Frameworks:</strong> React, Node.js, Express.js, Tailwind CSS</li>
                    <li><strong>Developer Tools:</strong> Git, Android Studio, Visual Studio Code, Anaconda, IntelliJ, Eclipse</li>
                    <li><strong>Databases:</strong> MongoDB, MySQL</li>
                    <li><strong>Soft Skills:</strong> Problem-Solving, Creativity, Teamwork, Adaptability, Good Listener</li>
                </ul>
            </section>

            <section className="resume-section">
                <h2>Projects</h2>
                <div>
                    <h3>Grocery Express – MERN Stack Project</h3>
                    <p>Jan 2024 – Mar 2024</p>
                    <ul>
                        <li>Developed a grocery e-commerce website using the MERN stack.</li>
                        <li>Built a comprehensive product catalog management system.</li>
                        <li>Optimized shopping cart and checkout processes for a seamless user experience.</li>
                        <li>Ensured responsiveness across devices.</li>
                        <li><a href="https://github.com/swaraj29/Grocery_Delivery_Service.git" target="_blank" rel="noopener noreferrer">GitHub Link</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Expense Management – MERN Stack Project</h3>
                    <p>Sep 2023 – Dec 2023</p>
                    <ul>
                        <li>Developed an expense management system for personal and business expenses.</li>
                        <li>Implemented features for financial transparency and budget adherence.</li>
                        <li>Designed an intuitive user interface for seamless functionality.</li>
                        <li><a href="https://github.com/swaraj29/Expense-Management-System.git" target="_blank" rel="noopener noreferrer">GitHub Link</a></li>
                    </ul>
                </div>
            </section>

            <section className="resume-section">
                <h2>Achievements</h2>
                <ul>
                    <li>Solved over 600 problems covering Data Structures, Algorithms, and SQL on competitive coding platforms.</li>
                    <li>Elite Certification in Data Visualization and Data Analytics (NPTEL Certification).</li>
                    <li>Elite Certification in Software Engineering (NPTEL Certification).</li>
                </ul>
            </section>

            <section className="resume-section">
                <h2>Languages</h2>
                <ul>
                    <li><strong>English:</strong> Conversational proficiency</li>
                    <li><strong>Hindi:</strong> Native proficiency</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;

