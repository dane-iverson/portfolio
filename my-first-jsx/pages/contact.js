import Header from "./Header"

export default () => (
    <div>
        <Header />
        <h1>Contact Information</h1>
        <p><b>Phone:</b>    (+27)-73-380-1962</p>
        <p><b>Email:</b>    hyperiondane@gmail.com</p>
        <p><b>Address:</b>    Gardens, Cape Town, Sotuh Africa</p>
        <style jsx>{`
          h1 {
            text-align: center;
            margin-top: 3rem;
            font-size: 3rem;
            color: #ff8c00;
          }
          p {
            text-align: center;
            font-size: 1.5rem;
            margin: 2rem 0;
          }
          b {
            font-weight: 600;
            color: #333;
          }
          a {
            color: #333;
            text-decoration: none;
            transition: all 0.2s ease-in-out;
          }
          a:hover {
            color: #ff8c00;
          }
        `}</style>
    </div>
)