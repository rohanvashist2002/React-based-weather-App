import WeatherCard from './weathercard';
import Searchbox from './searchbox';
import {useState} from 'react'
export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState( {
        city:'Delhi',
        temp: 22.5,
        humidity: 65,
        temMAx: 25.3,
        tempMin: 18.7,
        feelsLike: 23.1,
        description: "scattered clouds"
    })
    let updateWeather=(result)=>{
        setWeatherData(result);
    }
    return (

        <>
            <Searchbox updateWeather={updateWeather}/>
            < WeatherCard weatherData={weatherData} />
        </>

    );

};