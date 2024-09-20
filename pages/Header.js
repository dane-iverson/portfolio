import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="header">
      <Link href="/" legacyBehavior>
        <a className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
          About
        </a>
      </Link>
      <Link href="/projects" legacyBehavior>
        <a className={`nav-link ${pathname === "/projects" ? "active" : ""}`}>
          Projects
        </a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
          Contact
        </a>
      </Link>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: #222; /* Default dark mode background */
          padding: 1rem 2rem;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        /* Light mode styles */
        @media (prefers-color-scheme: light) {
          .header {
            background-color: #f0f0f0; /* Light gray background */
            color: black; /* Black text */
          }
          .nav-link {
            color: black; /* Black text for links */
          }
          .nav-link:hover {
            color: #ff8c00; /* Hover color */
          }
        }

        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
          .header {
            background-color: #444; /* Dark gray background */
            color: white; /* White text */
          }
          .nav-link {
            color: white; /* White text for links */
          }
          .nav-link:hover {
            color: #ff8c00; /* Hover color */
          }
        }

        .nav-link {
          font-size: 1.2rem;
          text-decoration: none !important;
          margin: 0 1.5rem;
          position: relative;
          transition: transform 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 2px;
          background-color: #ff8c00;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .nav-link:hover {
          transform: translateY(-2px);
        }

        .nav-link.active {
          font-weight: bold;
        }

        .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        a:link,
        a:visited,
        a:hover,
        a:active,
        Link {
          text-decoration: none !important;
        }
      `}</style>
    </div>
  );
};

export default Header;
