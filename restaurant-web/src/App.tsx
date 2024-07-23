import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import logo from "./assets/logo-no-background.png";

function App() {
  return (
    <>
      <Header />
      <div className="line"></div>
      <div>
        <img src={logo} alt="logo" className="banner" />
      </div>

      <div className="bento-container">
        <div className="long-up">Our Mission</div>
        <div className="middle-grid">
          <div className="square"> picture</div>
          <div className="square"> location</div>
        </div>
        <div className="long-up">
          {" "}
          contact us
          <p className="contact">
            <li>email</li>
            <li>phone</li>
          </p>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="line"></div>

      <Footer />
    </>
  );
}

export default App;
