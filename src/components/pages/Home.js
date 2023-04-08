import React from "react";
import { NavLink } from "react-router-dom";
// import Typical from 'react-typical'

const Home = () => {
  return (
    <>
      <section id="header">
        <div className="col-md-11  ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6  ">
              <h1>
                We Welcome's You In
                <strong className="brand-name"> React App</strong>
              </h1>
              <h2 className="my-3">
                Here You Can Find Many Products Which Will Make You Easier to
                Find Best & Favorite Product
              </h2>
              {/* <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                  "Convenience Products 🙂 ",
                  2000,
                  "Public hygiene Products 💻",
                  2000,
                  "Specialty Products 🖥",
                  2000,
                  "Heterogeneous Products 😎",
                  2000,
                  "Homogeneous Products ⌨ ",
                  1000,
                ]}
                />
              </h1> */}
              <div className="mt-3">
                <NavLink to="/login" className="btnA">
                  Get Started
                </NavLink>
              </div>
            </div>

            <div className="col-md-5 ">
              <lottie-player
                // src="https://assets8.lottiefiles.com/packages/lf20_rnnlxazi.json"
                src="https://assets3.lottiefiles.com/packages/lf20_XyoSty.json"
                background="transparent"
                speed="1"
                // style="width: 300px; height: 300px;"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
