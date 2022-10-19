import React from "react";

function Footer(){
    return(
        <>
            <div className="container-fluid footer">
                <div className="row ">
                    <div className="col-12 text-center mt-4"><i className="bi bi-geo-alt-fill footer_location"></i><span>Our Address:<strong> Thakordas Haridas Shah Matapur Bazar Nepanagar(M.P.) India</strong></span></div>
                    <div className="col-lg-3 col-5 offset-1 offset-lg-2 mt-4">
                        <div className="row">
                            <p className="col-12"><a href="#" className="ft-item">Account</a></p>
                            <p className="col-12"><a href="#"  className="ft-item">Orders</a></p>
                            <p className="col-12"><a href="#"  className="ft-item">Wishlist</a></p>
                            <p className="col-12"><a href="#"  className="ft-item">returns</a></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-5 mt-4">
                        <div className="row">
                            <p className="col-12"><a href="#"  className="ft-item">Contact</a></p>
                            <p className="col-12"><a href="#"  className="ft-item">Feedback</a></p>
                            <p className="col-12"><a href="#"  className="ft-item">Directions</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4  col-10 offset-1 offset-lg-0 mt-5 ">
                        <div className="row align-items-center">
                            <p className="col-3"><a href="tel:9171810265"  className="ft-item"><i class="bi bi-whatsapp"></i></a></p>
                            <p className="col-3"><a href="#"  className="ft-item"><i class="bi bi-facebook"></i></a></p>
                            <p className="col-3"><a href="#"  className="ft-item"><i class="bi bi-messenger"></i></a></p>
                            <p className="col-3"><a href="#"  className="ft-item"><i class="bi bi-instagram"></i></a></p>
                            <p className="col-12"><a href="email:ajayhshah18@gmail.com"  className="ft-item"><i class="bi bi-envelope"></i>ajayhshah18@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="col-12 text-center">&copy; Thakordas Haridas Shah</div>
                </div>
            </div>
        </>
    );

}

export default Footer;