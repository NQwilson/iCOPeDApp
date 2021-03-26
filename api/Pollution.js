import { openweathermap_api_key } from '../config.json';

export async function getPollution(){
    
try {
    let pollutionData = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=${openweathermap_api_key}`);
    let result = await pollutionData.json();
    //pollutionData = null;
    return result;
    
} catch (error) {
    throw error;
    
}

};
