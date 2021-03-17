import { openweathermap_api_key } from '../config.json';
import WeatherData from '../components/WeatherData';
export async function getPollution(){
    
try {
    let pollutionData = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=0035d565de4033d568a262c60d7b9620`);
    let result = await pollutionData.json();
    pollutionData = null;
    return result.pollutionData;
    
} catch (error) {
    throw error;
    
}


};
