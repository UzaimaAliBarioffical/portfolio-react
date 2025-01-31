import React from 'react'
import profileimage from "./assets/img.jpg"
// import 'bootstrap/dist/css/bootstrap.min.css';
function Baner() {
  return (
   <>
      <section id="home" className="profile-content">
      <div className="container banner ">
        <div className="row mt">
          <div className="col-lg-7 order-lg-1 order-2 profile-main">
            <h2 className="position-relative" data-aos="fade-up">HELLO,</h2>
            <h1 className='text' data-aos="fade-up" data-aos-delay="300">I AM UZAIMA ALI BARI</h1>
            <h3 data-aos="fade-up" data-aos-delay="600">BECOME A  web devloper<span className="auto_typed"></span></h3>
            <div className="mt-5">
              <a className="all-butn main-butn" data-aos="fade-right" data-aos-delay="900"
                href="https://github.com/UzaimaAliBarioffical">GO TO SITE <i className="fa-solid fa-arrow-right"></i></a>
              <a className="all-butn main-butn text-uppercase" data-aos="fade-right" data-aos-delay="1200"
                href="">Download cv</a>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2 order-1 " data-aos="fade-left" data-aos-delay="300">
            <div className="top-img">
              <img src={profileimage} alt="img" className="img-fluid img-2"/>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
    
  )
}
export default Baner;