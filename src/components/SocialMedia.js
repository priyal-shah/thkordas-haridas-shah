import React from 'react';

function SocialMedia(){
    return(
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-12 socialmediaicons1">
                        <div className=" row">
                        <p className="col-6 ml-5">click here</p>
                        <i class="bi bi-whatsapp col-2 ml-4" style={{color:'green'}}></i>
                        </div>
                        
                    </div>
                    <div className="col-12 socialmediaicons2">
                    
                        <a href="https://www.facebook.com/profile.php?id=100005880822866" className="row"> 
                            <p className="col-6 ml-5">click here</p>
                            <i class="bi bi-facebook col-2 ml-4" style={{color:'blue'}}></i>
                        </a>
                        
                    </div>
                    <div className="col-12 socialmediaicons3">
                    <div className=" row">
                        <p className="col-6 ml-5">click here</p>
                        <i class="bi bi-instagram col-2 ml-4" style={{color:'purple'}}></i>
                        </div>
                     </div>
                </div>
            </div>
        </>

    );
}

export default SocialMedia;