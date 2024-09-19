import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="header">
      <Link href="/">
        <a className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</a>
      </Link>
      <Link href="/about">
        <a className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
          About
        </a>
      </Link>
      <Link href="/projects">
        <a className={`nav-link ${pathname === "/projects" ? "active" : ""}`}>
          Projects
        </a>
      </Link>
      <Link href="/contact">
        <a className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
          Contact
        </a>
      </Link>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: #222;
          padding: 1rem 2rem;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: background-color 0.3s ease-in-out;
        }
        .header:hover {
          background-color: #333;
        }
        .nav-link {
          color: #fff;
          font-size: 1.2rem;
          text-decoration: none;
          margin: 0 1.5rem;
          position: relative;
          transition: color 0.2s ease-in-out, transform 0.3s ease;
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
          color: #ff8c00;
          transform: translateY(-2px);
        }
        .nav-link.active {
          color: #ff8c00;
          font-weight: bold;
        }
        .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        /* Remove default link underline */
        a:visited,
        a:link {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Header;
