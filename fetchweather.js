import axios from "axios";

    const API_KEY='0d9ba79e833a1dc324e10eadf93f1793';
    const URL='https://api.openweathermap.org/data/2.5/weather';

    export const fetchWeather=async (query)=>{
        const {data}=await axios.get(URL,{
            params:{
                q:query,
                units:'metric',
                APPID:API_KEY,
            }
        })
        return data;
    }
   
