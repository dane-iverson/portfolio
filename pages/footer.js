import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:daneiversontemp@gmail.com">
              daneiversontemp@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+27733801962">+27 73 380 1962</a>
          </p>
        </div>
        <div className="footer-section technologies">
          <h3>Technologies Used</h3>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>Vercel</li>
            <li>Git</li>
            <li>CSS-in-JS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Google Analytics</li>
          </ul>
        </div>
        <div className="footer-section about">
          <h3>About This Site</h3>
          <p>
            This portfolio showcases my work and skills as a developer. Feel
            free to reach out if you have any questions or collaboration ideas!
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Dane Iverson. All rights reserved.
        </p>
      </div>
      <style jsx>{`
        footer {
          background: #333;
          color: white;
          padding: 2rem;
          text-align: center;
        }

        .footer-content {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .footer-section {
          flex: 1;
          min-width: 200px;
          margin: 1rem;
        }

        h3 {
          margin-bottom: 1rem;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        a {
          color: #ff8c00;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .footer-bottom {
          margin-top: 2rem;
          border-top: 1px solid #555;
          padding-top: 1rem;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
