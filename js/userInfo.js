$(document).ready(function(){
    var timeDelay = 2000;           // MILLISECONDS (2 SECONDS).
    setTimeout(getLocationInfo, timeDelay);  // MAKE THE AJAX CALL AFTER A FEW SECONDS DELAY.

    function getLocationInfo(){
        // Get user location
        let locationApiKey = "X";
        let weatherApiKey = "X";
        $.ajax({
            type: "GET",
            url: `https://ipgeolocation.abstractapi.com/v1/?api_key=${locationApiKey}`,
            dataType: "json",
            success: function(locationData){
                // console.log(locationData);
                let city = locationData['city'];
                let zipcode = locationData['postal_code'];
                // let lat = locationData['latitude'];
                // let long = locationData['longitude'];
                // console.log(`City: ${city} Lat: ${lat}  Long: ${long}`);
                // console.log(`City: ${city} AND Zipcode: ${zipcode}`);
                
                setTimeout(getLocationWeather, timeDelay);  // MAKE THE AJAX CALL AFTER A FEW SECONDS DELAY.
                function getLocationWeather(){
                    // Get Users locations weather
                    $.ajax({
                        url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipcode}?unitGroup=us&include=current&key=${weatherApiKey}&contentType=json`,
                        dataType: "json",
                        success: function(weatherData){
                            // console.log(weatherData);
                            let conditions = weatherData['currentConditions']['conditions'];
                            let temp = weatherData['currentConditions']['temp'];
                            // console.log(`Temp is ${temp} and Conditon is ${conditions}`);

                            // Set sessionStorage
                            const userLocationInfo = new Object();
                                userLocationInfo.city = city;
                                userLocationInfo.conditions = conditions;
                                userLocationInfo.temp = temp;
                            if(sessionStorage["userLocationInfo"]){
                                sessionStorage.clear();
                            }
                            sessionStorage.setItem("userLocationInfo", JSON.stringify(userLocationInfo));
                            let userObject = JSON.parse(sessionStorage.getItem("userLocationInfo"));
                            console.log(userObject);
                        } // success
                    }); // .ajax()
                } // getLocationWeather()
            } // sucess
        }); // .ajax()
    } // getLocationInfo()
}); // .ready()
