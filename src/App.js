import { useState, useEffect } from "react";
import backtop from "./assets/image/back-top.svg";
import { Link } from "react-router-dom";
import "./App.scss";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Router from "./routes/Router";
import Space from "./Space";

function App() {
  const [gotoTop, setGotoTop] = useState(false);

  const handleGotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setGotoTop(true);
      } else {
        setGotoTop(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Space />
              <Router />
              <Footer />

              {gotoTop && (
                <Link
                  onClick={handleGotoTop}
                  to="#"
                  style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "10px",
                    zIndex: 99,
                  }}
                  className="btn-go-to-top"
                >
                  <img src={backtop} alt="backtop" />
                </Link>
              )}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
