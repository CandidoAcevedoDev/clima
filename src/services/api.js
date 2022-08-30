import axios from 'axios'
const appId = import.meta.env.VITE_API_KEY

const getWeather = async ({ciudad, pais}) => {
  try {
    const appId = import.meta.env.VITE_API_KEY

    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`);

    const {data} = response

    return  data

  } catch (error) {
    return error
  }  
}

const getLatLon = async(lat, lon) => {
    try {
        const appId = import.meta.env.VITE_API_KEY

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`);

        //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

        const {data} = response
    
        return  data 
    } catch (error) {
        return error
    }
    
}

export {getWeather, getLatLon}

