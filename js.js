document.addEventListener("DOMContentLoaded",function(event){
    var inputSearch = document.getElementById("keyword");
    inputSearch.onkeydown = function(event){
        if(event.keyCode == 13){
            loadCity(this.value);
        }
    }
    loadCity("Ha noi")
})


function loadCity(keyword){
    var OPENWEATHER_API = "https://api.openweathermap.org/data/2.5/weather?q="+keyword+"&appid=0d9f2b730112a0ac4f1d1a9a88546b95&units=metric";
    var xhr = new XMLHttpRequest();
    xhr.open("GET",OPENWEATHER_API,true);
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // Parse ket qua tra ve thanh kieu json
            var responseJson = JSON.parse(this.responseText);
            var htmlContent = "";

            for (var i = 0; i < responseJson.weather.length;i++){
                var cityName = responseJson.name;
                var countryName = responseJson.sys.country;
                var temperature = responseJson.main.temp;
                var clouds = responseJson.weather[i].description;
                var cloudStatus = responseJson.weather[i].icon;
                var wind = responseJson.wind.speed;
                var lon = responseJson.coord.lon;
                var lat = responseJson.coord.lat;
                htmlContent += '<div class="weather">City: '+ cityName +'</div>';
                htmlContent += '<div class="country-name">Country: '+ countryName + '</div>';
                htmlContent += '<div class="lon">Longitude: '+ lon + '</div>';
                htmlContent += '<div class="lat">Latitude: '+ lat + '</div>';
                htmlContent += '<div class="temperature">Temperature: ' + temperature + '&#8451;</div>'
                htmlContent += '<img src="https://openweathermap.org/img/wn/' + cloudStatus + '@2x.png">'
                htmlContent += '<div class="timezone">Wind Velocity: '+ wind +'m/s<div>';
                htmlContent += '<div class="clouds">Cloud Status: ' + clouds +'</div>';
            }
            document.getElementById("list-weather").innerHTML = htmlContent;
        }
        else if(this.readyState == 4 && this.status == 404 ){
            console.log("Fails");
            feedback = document.getElementById("feedback");
            feedback.textContent = "Can't find this city";
        }
        else {
            feedback.textContent = "";
        }
    }
    xhr.send();
}

function lineEffect(){
    lineEffect = document.getElementById("lineEffect");
}