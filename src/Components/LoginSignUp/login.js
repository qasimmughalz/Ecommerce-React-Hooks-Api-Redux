import react from "react";

import "./LoginSignUp.css";

export const Login = () => {
  return (
    <div className="container-fluid login p-0 m-0">
      <div className="row align-items-center text-center justify-content-between p-0 m-0">
        <div className="col-lg-4 text-left">
          <div className="text-center">
            <img
              style={{ height: "30px" }}
              src="https://carvago.com/images/logo.svg"
              className="img-fluid my-5"
            ></img>
            <h2 className="fw-normal">Login</h2>
            <p>
              Not currently registered?{" "}
              <span className="text-danger"> SignUp</span>{" "}
            </p>
          </div>

          <div
            className="px-3 m-auto text-left my-5"
            style={{ width: "80%", textAlign: "left" }}
          >
            <form>
              <div className="form-group my-3 ">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter the name"
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter the name"
                ></input>
              </div>
              <div className="form-group my-3 text-center">
                <button className="btn hero-btn " style={{ width: "100%" }}>
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="text-center">
            <p className="text-muted">© Copyright 2022 QasimMughal</p>
          </div>
        </div>
        <div className="col-lg-8 d-lg-block d-none p-0 m-0">
          <img
            className="img-fluid p-0 m-0"
            style={{ height: "100vh" }}
            src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
      </div>
    </div>
  );
};
