import React from 'react';
import Header from './header';
import Footer from './Footer';
import {Link} from 'react-router-dom'

function InfoPage(){
    return(
        <>
        <Header/>

        <div className="container">
            <div className="row">
                    <form className="col-12 m-3 updateInfoForm">
                    <div className="row">
                        
                        <div className="col-12 ml-5"><h3>Update Profile <i class="bi bi-person-video2"></i></h3></div>

                        <div className="col-12 m-4 row">
                            <label className="col-3">Name</label>
                            <input type="text" placeholder="name" className="col-6"/>
                        </div>

                        <div className="col-12 m-4 row">
                            <label className="col-3">Address</label>
                            <input type="text" placeholder="address" className="col-6" />
                            <Link to="/userlocation" className="col-12 col-md-3 locate_onmap"><i class="bi bi-pin-map-fill"></i>Locate on map</Link>
                        </div>

                        <div className="col-12 m-4 row">
                            <label className="col-3">Contact No.</label>
                            <input type="tel" placeholder="contact number" className="col-6"/>
                        </div>

                        <div className="col-12 m-4 row">
                            <label className="col-3">Email</label>
                            <input type="email" placeholder="email" className="col-6"/>
                        </div>

                        <div className="col-12 m-4 row">
                            <label className="col-6">Add profile photo</label>
                            <input type="file"  className="col-5"/>
                        </div>

                        <button type="submit"  className=" col-4 offset-2 bg-primary">Save</button>
                    </div>
                </form>

                <div className="profile_img col-lg-4 "></div>
            </div>
        </div>
        

        
        <Footer/>
        </>

    );
}

export default InfoPage;