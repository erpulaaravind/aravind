let searchValue = document.querySelector(".searchValue");
let searchButton = document.querySelector(".searchButton");
let icon = document.querySelector(".icon");
let temperature = document.querySelector(".temp");
let desc = document.querySelector(".description");
let city = document.querySelector(".city");
let info = document.querySelector(".info");

const apikey = "3ededbd7df6fa13d33a1adbc0f9ef9b6";

searchButton.addEventListener("click", async () => {
    let loc = searchValue.value;
    document.querySelector(".searchValue").value = "";
    if(loc == ""){
        alert("Enter a city Name");
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
        let response = await fetch(url);
        if(!response.ok){
            alert("City not found");
            info.style.display = "none";
        }
        else{
            info.style.display = "block";

            let data = await response.json();
            const{id} = data.weather[0];
            const{description} = data.weather[0];
            const{temp} = data.main;
            const{name} = data;

            temperature.innerHTML = Math.floor(temp - 273) + "°";
            desc.innerHTML = description;
            city.innerHTML = name;

            switch(true){
                case(200 <= id && id <= 232):
                    icon.innerHTML = "⛈️";
                    break;
                case(300 <= id && id <= 321):
                    icon.innerHTML = "🌧️";
                    break;
                case(500 <= id && id <= 531):
                    icon.innerHTML = "🌦️";
                    break;
                case(600 <= id && id <= 622):
                    icon.innerHTML = "❄️";
                    break;
                case(701 <= id && id <= 781):
                    icon.innerHTML = "🌪️";
                    break;
                case(800 == id):
                    icon.innerHTML = "☀️";
                    break;
                case(801 <= id && id <= 804):
                    icon.innerHTML = "☁️";
                    break;
            }
        }
    }
});