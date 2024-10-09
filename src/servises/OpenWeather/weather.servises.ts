import { current_url, forecast_url } from "../constantes";

const baseUrl = forecast_url;
const baseUrl2 = current_url;

export function getForecast(lat: number, lon: number, units: string = "metric", lang: string = "es", appid: string = "ddfd47af9630a4bf2435f0245efc3a9d"): Promise<Response> {
    const url = `${baseUrl}lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${appid}`
    return fetch(
        url,
        {
            method: 'get',
            
        }
    );
}

export function getWeather(lat: number, lon: number, units: string = "metric", lang: string = "es", appid: string = "ddfd47af9630a4bf2435f0245efc3a9d"): Promise<Response> {
    const url = `${baseUrl2}lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${appid}`
    return fetch(
        url,
        {
            method: 'get',
            
        }
    );
}