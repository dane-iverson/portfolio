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
        <style jsx>{`
          .container {
            text-align: center;
          }
          h1 {
            font-size: 3rem;
            color: #ff8c00;
            margin-bottom: 2rem;
            animation: fadeIn 2s ease-in-out;
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
