import React from "react";




export const Footer = ()=>{
    return( <div className=" mt-5">
  <footer className="text-center text-white">
    <div className="container">
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <p  className="text-white">About us</p>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <p  className="text-white">Products</p>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <p  className="text-white">Awards</p>
            </h6>
          </div>
          

          
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <p  className="text-white">Help</p>
            </h6>
          </div>
          

          
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <p  className="text-white">Contact</p>
            </h6>
          </div>
          
        </div>
      </section>

      <hr className="my-5" />

      <section className="mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-5 d-flex justify-content-center">
        <p href="" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </p>
        <p href="" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </p>
        <p href="" className="text-white me-4">
          <i className="fab fa-google"></i>
        </p>
        <p href="" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </p>
        <p href="" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </p>
        <p href="" className="text-white me-4">
          <i className="fab fa-github"></i>
        </p>
      </section>
    </div>

    <div
         className="text-center p-3">
      © 2020 Copyright:
      <p className="text-white" href="https://mdbootstrap.com/"
         >Qasim Mughal</p
        >
    </div>
  </footer>
</div>

    )
}