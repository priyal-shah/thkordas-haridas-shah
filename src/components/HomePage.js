import React from 'react';
import shop_img_1 from '../images/shop_img_1.jpeg';
import shop_img_2 from '../images/shop_img_2.jpeg';
import shop_img_3 from '../images/shop_img_3.jpeg';
import shop_img_4 from '../images/shop_img_4.jpeg';
import Header from './header.js'
import Footer from "./Footer";
import SocialMedia from './SocialMedia';
import Products from '../Product.js';

function HomePage(){

    return(
        <div className="homepagediv">
            <Header/>
            {/* sliding window of shop photos */}

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                {/* <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner shop_images">
                    <div className="carousel-item active ">
                        <img src={shop_img_2} className="d-block w-100 carousel-item-img  col-10 offset-1" alt="image-1" />
                    </div>
                    <div className="carousel-item ">
                    <img src={shop_img_3} className="d-block w-100 carousel-item-img  col-10 offset-1" alt="image-2"/>
                    </div>
                    <div className="carousel-item ">
                    <img src={shop_img_1} className="d-block w-100 carousel-item-img col-10 offset-1" alt="image-3"/>
                    </div>
                    <div className="carousel-item ">
                    <img src={shop_img_4} className="d-block w-100 carousel-item-img col-10 offset-1" alt="image-4"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" ></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" ></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>


            {/* directions */}

            <div className="container " id="directions">
                <div className="row mt-5">
                    <h2 className="col-12"><strong>Directions</strong><i class="bi bi-signpost-fill"></i></h2>
                    <div className="col-8 ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.3987933554445!2d76.38979551397433!3d21.4528635785426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd8298e1b8523ad%3A0x12143e5832296ed!2sThakordas%20Haridas%20Shah!5e0!3m2!1sen!2sin!4v1637605577746!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" className="map_div" ></iframe>
                    </div>
               
                    <div className="col-4 shop_vector">
                       
                    </div>
         
              

                </div>
            </div>


            {/* shop info table */}
            <div className="container">
                <div className="row">
                 <div className="col-lg-6 table_img"></div>
                <table class="table table-bordered   col-10 offset-1 mt-5 col-lg-6 offset-lg-0">
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td><strong>Name</strong></td>
                    <td><strong>Thakordas Haridas Shah</strong></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Address</td>
                    <td>35 Matapur Bazar Nepanagar(M.P.)</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Owner</td>
                    <td>Mr. Ajay Shah</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Opening Time</td>
                    <td>8:30am</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>Closing Time</td>
                    <td>9:00pm</td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td>Contact Number</td>
                    <td>9425495964</td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td>Available Payment Modes</td>
                    <td>
                        <ol>
                            <li>Cash</li>
                            <li>Paytm</li>
                            <li>PhonePay</li>
                            <li>GooglePay</li>
                        </ol>
                    </td>
                    </tr>
                </tbody>
            </table>

            {/* Contact info */}
            <div className="container" id="contact">
                <div className="row ">
                    <div className="col-10 col-sm-5 m-5 mt-5 m-sm-0 mt-sm-5">
                        <div class="card owner_card">
                            <img src={shop_img_3} class="card-img-top owner_img" alt="Owner Image"/>
                            <div class="card-body">
                                <h5 class="card-title"><strong>Mr. Ajay Shah</strong> <h6>(Owner)</h6></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-sm-6 ml-5  ml-md-0 row">
                        <h2 className="col-12 mt-5"><strong>Contact Info <i class="bi bi-person-lines-fill"></i></strong></h2>
                        <p className="col-2  contact_icon"><a href="tel:9171810265"  className="ft-item"><i class="bi bi-whatsapp"></i></a></p>
                        <p className="col-2 contact_icon"><a href="#"  className="ft-item"><i class="bi bi-facebook"></i></a></p>
                        <p className="col-2 contact_icon"><a href="#"  className="ft-item"><i class="bi bi-messenger"></i></a></p>
                        <p className="col-2 contact_icon"><a href="#"  className="ft-item"><i class="bi bi-instagram"></i></a></p>
                        <p className="col-12  "><a href="Email:ajayhshah18@gmail.com"  className="ft-item"><i class="bi bi-envelope"></i><strong> ajayhshah18@gmail.com</strong></a></p>
                        <p className="col-11 offset-1  "><a href="tel:9425495964"  className="ft-item"><i class="bi bi-telephone-fill"></i><strong> 9425495964</strong></a></p>
                        
                    </div>
                    
                </div>
            </div>
                </div>
            </div>


            {/* feedback form */}

            <form className="container " >
                <div className='row feedback_form'>
                    <div className="col-10 col-md-6 offset-1 offset-md-3">
                        <h3 className="col-8 offset-3 "><strong><em>Feedback</em></strong></h3>
                        <div className="col-12 row">
                            <label className="col-12 offset-1 m-2"><strong>Name</strong></label>
                            <input type="text" placeholder="Your Name" className="col-10 offset-1 m-3"/>
                        </div>
                        <div className="col-12 row">
                            <input type="text" placeholder="✍ Write feedback here... " className="col-10 offset-1 m-3 feedback_input "/>
                        </div>
                        <div className="col-10 offset-1 row "> <button type="submit" className="col-6 mt-2  btn bg-success">Submit</button></div>
                        
                    </div>
                </div>
            </form>


                <div>
                    hello
                    <image src={Products[0].image}/>
                </div>

            <SocialMedia/>

            <Footer/>
        </div>

    );

}

export default HomePage;