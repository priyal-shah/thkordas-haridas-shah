import React from "react";
import Header from "./header";
import Footer from "./Footer";

function UserLocation(){


     var c =function(pos){
         var lat= pos.coords.latitude,
         long=pos.coords.longitude,
         coords=lat+','+long;

         document.getElementById('google_map').setAttribute('src', 'https://maps.google.co.uk?q='+coords+'&z=60&output=embed')
     }

     function getlocation(){
         navigator.geolocation.getCurrentPosition(c);
         return false;
     }
        //     var x = document.getElementById("userlocation");
        // function getLocation() {
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(showPosition);
        // } else {
        //     x.innerHTML = "Geolocation is not supported by this browser.";
        // }
        // }

        // function showPosition(position) {
        //     var latlon = position.coords.latitude + "," + position.coords.longitude;
          
        //     var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
          
        //     document.getElementById("userlocation").innerHTML = "<img src='"+img_url+"'>";
        //   }

          

    return(
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <button className="col-3 m-5 " name="get_location" type="submit"onClick={getlocation}  id="get_location" value="get my location">Add my location</button>
                    <div className="Element col-12">
                        <div id="map">
                            <iframe id="google_map" width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.co.uk?output=embed"></iframe>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );

}

export default UserLocation;