import Header from "./Header";
import { useState } from "react";

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dane-iverson-51505a238/",
    icon: "linkedin.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/daneiverson",
    icon: "instagram.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/dane-iverson",
    icon: "github.svg",
  },
  { name: "Email", url: "mailto:hyperiondane@gmail.com", icon: "mail.svg" },
];

const LinksPage = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <Header />
      <div className="hero">
        <div className="container">
          <h1>Find Me Online</h1>
          <div className="links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={hovered === index ? "hovered" : ""}
              >
                <img src={`/icons/${link.icon}`} alt={`${link.name} icon`} />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <style jsx>{`
          .hero {
            min-height: 100vh;
            background: linear-gradient(135deg, #f5a77a, #b52718);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            overflow: hidden;
          }

          .container {
            text-align: center;
            padding: 2rem;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            animation: fadeIn 2s ease-in-out;
            transition: background-color 0.4s ease;
          }

          h1 {
            font-size: 3rem;
            color: #ff8c00;
            margin-bottom: 2rem;
          }

          .links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
          }

          .links a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #333;
            font-size: 1.5rem;
            transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
          }

          .links a img {
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
            transition: transform 0.3s ease-in-out;
          }

          .links a span {
            transition: color 0.3s ease-in-out;
          }

          .links a:hover {
            transform: scale(1.1);
            color: #ff8c00;
          }

          .links a.hovered img {
            transform: rotate(360deg);
          }

          /* Dark mode styles */
          @media (prefers-color-scheme: dark) {
            .hero {
              background: linear-gradient(
                135deg,
                #a0c4ff,
                #6a0dad
              ); /* Gradient from light blue to dark purple */
            }
            .container {
              background-color: rgba(30, 30, 30, 0.9);
            }
            h1 {
              color: #fff;
            }
            .links a {
              color: #fff;
            }
            .links a:hover {
              color: #ff8c00;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default LinksPage;
