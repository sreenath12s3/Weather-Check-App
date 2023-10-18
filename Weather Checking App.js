const apiKey = "4e73a3d75789be9dacc9fc89e36f0b19";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); // Corrected selector

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
     if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
     } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        // Provide online image URLs or relative paths to your local images
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "C:/Users/Srinath%20S/Pictures/Saved%20Pictures/cloud.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "C:/Users/Srinath%20S/Pictures/Saved%20Pictures/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "C:/Users/Srinath%20S/Pictures/Saved%20Pictures/rain.jpeg";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "C:/Users/Srinath%20S/Pictures/Saved%20Pictures/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "C:/Users/Srinath%20S/Pictures/Saved%20Pictures/mist.jpeg";
        }

        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
     }
    
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});