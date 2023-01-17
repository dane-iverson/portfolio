import Header from "./Header";

function Welcome(props) {
    return (
        <>
            <Header />
        <h1>
            Hello, I can use Next!!!
            </h1>
            <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image"/>
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
        </>
    )
}

export default Welcome;