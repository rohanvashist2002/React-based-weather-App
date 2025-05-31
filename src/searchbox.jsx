import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import './app.css'

// import SearchIcon from '@mui/icons-material/Search';
export default function Searchbox({ updateWeather }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    let API_KEY = '7f1a558e92d560abaa232583f88f15a5';
    

        let getWeatherInfo = async () => {
            try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let weatherData = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                temMAx: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                feelsLike: jsonResponse.main.feels_like,
                description: jsonResponse.weather[0].description
            };
            console.log(weatherData);
            console.log(jsonResponse);
            return weatherData;

        } catch (error) {
            throw error;
        }
        };

    let handleChange = (event) => {
        setCity(event.target.value);
    };
    let submitChange = async (event) => {
        try {

            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateWeather(newInfo);
        }

        catch (err) {
            setError(true);
        }
    };

    return (
        <> 
            
            <h1 style={{ color: "#102E50" }}> <i class="fa-solid fa-temperature-half"></i>  Weather Forecast </h1>
            <form onSubmit={submitChange}>
                <TextField style={{ width: '500px', textAlign: 'center' }}
                    placeholder="Search your Address, city or Zip code"
                    id="city" required
                    value={city}
                    onChange={handleChange}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" endIcon={<SendIcon />} type='submit'>
                    Search
                </Button>
                {error && <p style={{ color: "red", textAlign:"center" , fontSize:'20px'}}>No such place found in our API!!</p>}
            </form>

        </>
    );
} 