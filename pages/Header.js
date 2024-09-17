import Link from 'next/link'

const Header = () => (
  <div>
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/projects'><>Projects</></Link>
    <Link href='/contact'><>Contact</></Link>
    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 1rem 2rem;
        box-shadow: 0px 5px 10px 0px #ccc;
      }
      a {
        color: #333;
        font-size: 1.2rem;
        text-decoration: none;
        margin-right: 1.5rem;
        transition: all 0.2s ease-in-out;
      }
      a:hover {
        color: #ff8c00;
      }
    `}</style>
  </div>
)

export default Header