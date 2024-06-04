
//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '22fdde376emsh0ef102b147a3de4p19d9d9jsnfbfcf2b30a58',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        {
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        }
    })
    .catch(err => console.log(err))


const getWeather = (city) => {
    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)


            {
                cloud_pct.innerHTML = response.cloud_pct
                temp.innerHTML = response.temp
                temp2.innerHTML = response.temp
                feels_like.innerHTML = response.feels_like
                humidity.innerHTML = response.humidity
                humidity2.innerHTML = response.humidity
                min_temp.innerHTML = response.min_temp
                max_temp.innerHTML = response.max_temp
                wind_speed.innerHTML = response.wind_speed
                wind_speed2.innerHTML = response.wind_speed
                sunrise.innerHTML = response.sunrise
                sunset.innerHTML = response.sunset
            }


        })
        .catch(err => console.error(err));

}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather()

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        {
            Cloud_pct1.innerHTML = response.cloud_pct
            Feels_like1.innerHTML = response.feels_like
            Humidity1.innerHTML = response.humidity
            Max_temp1.innerHTML = response.max_temp
            Min_temp1.innerHTML = response.min_temp
            Sunrise1.innerHTML = response.sunrise
            Sunset1.innerHTML = response.sunset
            Temp1.innerHTML = response.temp
            Wind_degrees1.innerHTML = response.wind_degrees
            Wind_speed1.innerHTML = response.wind_speed
        }
    })
    .catch(err => console.log(err))


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        {
            Cloud_pct2.innerHTML = response.cloud_pct
            Feels_like2.innerHTML = response.feels_like
            Humidity2.innerHTML = response.humidity
            Max_temp2.innerHTML = response.max_temp
            Min_temp2.innerHTML = response.min_temp
            Sunrise2.innerHTML = response.sunrise
            Sunset2.innerHTML = response.sunset
            Temp2.innerHTML = response.temp
            Wind_degrees2.innerHTML = response.wind_degrees
            Wind_speed2.innerHTML = response.wind_speed
        }
    })
    .catch(err => console.log(err))

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        {
            Cloud_pct3.innerHTML = response.cloud_pct
            Feels_like3.innerHTML = response.feels_like
            Humidity3.innerHTML = response.humidity
            Max_temp3.innerHTML = response.max_temp
            Min_temp3.innerHTML = response.min_temp
            Sunrise3.innerHTML = response.sunrise
            Sunset3.innerHTML = response.sunset
            Temp3.innerHTML = response.temp
            Wind_degrees3.innerHTML = response.wind_degrees
            Wind_speed3.innerHTML = response.wind_speed
        }
    })
    .catch(err => console.log(err))

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        {
            Cloud_pct4.innerHTML = response.cloud_pct
            Feels_like4.innerHTML = response.feels_like
            Humidity4.innerHTML = response.humidity
            Max_temp4.innerHTML = response.max_temp
            Min_temp4.innerHTML = response.min_temp
            Sunrise4.innerHTML = response.sunrise
            Sunset4.innerHTML = response.sunset
            Temp4.innerHTML = response.temp
            Wind_degrees4.innerHTML = response.wind_degrees
            Wind_speed4.innerHTML = response.wind_speed
        }
    })
    .catch(err => console.log(err))

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dehli', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        {
            Cloud_pct5.innerHTML = response.cloud_pct
            Feels_like5.innerHTML = response.feels_like
            Humidity5.innerHTML = response.humidity
            Max_temp5.innerHTML = response.max_temp
            Min_temp5.innerHTML = response.min_temp
            Sunrise5.innerHTML = response.sunrise
            Sunset5.innerHTML = response.sunset
            Temp5.innerHTML = response.temp
            Wind_degrees5.innerHTML = response.wind_degrees
            Wind_speed5.innerHTML = response.wind_speed
        }
    })
    .catch(err => console.log(err))

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        {
            Cloud_pct6.innerHTML = response.cloud_pct
            Feels_like6.innerHTML = response.feels_like
            Humidity6.innerHTML = response.humidity
            Max_temp6.innerHTML = response.max_temp
            Min_temp6.innerHTML = response.min_temp
            Sunrise6.innerHTML = response.sunrise
            Sunset6.innerHTML = response.sunset
            Temp6.innerHTML = response.temp
            Wind_degrees6.innerHTML = response.wind_degrees
            Wind_speed6.innerHTML = response.wind_speed
        }
    })
    .catch(err => console.log(err))






