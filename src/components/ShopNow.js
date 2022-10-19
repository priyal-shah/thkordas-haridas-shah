import React, { useState, useEffect } from "react";
import sliding_1_ad_1 from '../images/sliding_1_ad_1.jfif'
import sliding_1_ad_2 from '../images/sliding_1_ad_2.jpg'
import sliding_1_ad_3 from '../images/sliding_1_ad_3.jpg'
import sliding_1_ad_4 from '../images/sliding_1_ad_4.jfif'
import category_card_1 from '../images/category_card_1.jpg'
import category_card_2 from '../images/catagory_card_2.jfif'
import category_card_3 from '../images/catgory_card_3.jpg'
import category_card_4 from '../images/catagory_card_4.jfif'
import category_card_6 from '../images/catagory_card_6.jfif'
import add_img from '../images/ad_img.png'
import s2_card_1 from '../images/s2_card_1.jfif'
import s2_card_2 from '../images/s2_card_2.jfif'
import s2_card_3 from '../images/s2_card_3.jfif'
import s2_card_4 from '../images/s2_card_4.jfif'
import brand_1 from '../images/brand_1.jfif'
import brand_2 from '../images/brand_2.jfif'
import brand_3 from '../images/brand_3.jfif'
import brand_4 from '../images/brand_4.jfif'
import brand_5 from '../images/brand_5.jfif'
import brand_6 from '../images/brand_6.jfif'
import Header from './header.js';
import Footer  from "./Footer";
import { Component } from "react";
import SocialMedia from "./SocialMedia";


function ShopNow(){


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },)

    return (

        <>
            <Header/>
       
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                {/* <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item ">
                    <img src={sliding_1_ad_1} className="d-block w-100 carousel-item-img  " alt="image-1" />
                    </div>
                    <div className="carousel-item ">
                    <img src={sliding_1_ad_2} className="d-block w-100 carousel-item-img " alt="image-2"/>
                    </div>
                    <div className="carousel-item">
                    <img src={sliding_1_ad_3} className="d-block w-100 carousel-item-img" alt="image-3"/>
                    </div>
                    <div className="carousel-item active">
                    <img src={sliding_1_ad_4} className="d-block w-100 carousel-item-img" alt="image-4"/>
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
            

            {/* category cards */}

            <div className="container">
                <div className="row">


                    <a href="#"> <div className="card card_1  ml-3 mr-3 ml-lg-5">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Food Items</strong></h5>
                            <img src={category_card_1} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_1 ml-3 mr-3">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Personal Care</strong></h5>
                            <img src={category_card_2} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_1 card_1_3 ml-3 mr-3 ">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Baby Products</strong></h5>
                            <img src={category_card_3} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_2 ml-3 mr-3 ml-lg-5">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Worship Items</strong></h5>
                            <img src={category_card_4} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_2 ml-3 mr-3">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Food Items</strong></h5>
                            <img src={category_card_1} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_2 ml-3 mr-3 ">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Cleaners</strong></h5>
                            <img src={category_card_6} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                </div>
            </div>

            {/* advertismennt */}


            <div id="carouselExampleSlidesOnly s" className="carousel slide ad_img_div" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={add_img} class="d-block w-100 ad_img" alt="..."/>
                    </div>
                    <span className="ad_span">Ad</span>
                </div>
            </div>


            {/* second sliding window */}

            <div className="container "><h2 className="row"><strong className="try_heading ">Body Lotion</strong></h2></div>


            <div className="container try">
                <div className="row">
                <a href="#"> <div className="card card_2 s2_card c1 ml-lg-5 ">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Vaseline</strong> </h5>
                            <img src={s2_card_1} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_2 s2_card c2 ">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Himalaya</strong></h5>
                            <img src={s2_card_2} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_2 s2_card c3 ">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Nivea</strong></h5>
                            <img src={s2_card_3} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_2 s2_card c4">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Joy</strong></h5>
                            <img src={s2_card_4} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                </div>
            </div>

             {/* brand name cards */}

             <div className="container">
                <div className="row">

                    <div className="col-12 mb-5 try_heading"><h3><strong>Shop With Brand</strong></h3></div>


                    <a href="#"> <div className="card card_1  ml-3 mr-3 ml-lg-5 ">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Patanjali</strong></h5>
                            <img src={brand_1} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_1 ml-3 mr-3">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Everest</strong></h5>
                            <img src={brand_2} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_1 card_1_3 ml-3 mr-3 ">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Parle</strong></h5>
                            <img src={brand_3} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_2 ml-3 mr-3 ml-lg-5">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Himalaya</strong></h5>
                            <img src={brand_4} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_2 ml-3 mr-3">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Detol</strong></h5>
                            <img src={brand_5} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                    <a href="#"> <div className="card card_2 ml-3 mr-3 ">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Cadbury</strong></h5>
                            <img src={brand_6} className="card-img-top" alt="image"/>
                        </div>
                    </div></a>

                </div>
            </div>

            <div className="btn_div"><a href=""><button className="signin_btn"><strong>Sign in/ Sign Up</strong></button></a></div>
            <div className="back_to_top"><a href="#carouselExampleIndicators">Back to Top</a></div>
            <SocialMedia/>
    

            <Footer/>
             
        </>
    );
}

export default ShopNow;