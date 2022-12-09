import axios from 'axios';

function GetData(lat, lon,) {
    // console.log(Store)
    axios.get('https://api.weather.yandex.ru/v2/forecast?extra=true&hours=false', {
        headers: { 'X-Yandex-API-Key': 'c862fadf-0f19-4cd7-abd7-6f13a06bd115' },
        params: {
            lon: lon,
            lat: lat,
        }
    })
        .then(function (response) {
            // response = String(response);
            // response = JSON.parse(response)
            // Store.City = response.data.geo_object.locality.name;
            // Store.nowDate = response.data.forecasts[0].date;
            // Store.nightShort = response.data.forecasts[0].parts.night_short;
            // Store.day_short = response.data.forecasts[0].parts.day_short;
            // Store.morning = response.data.forecasts[0].parts.morning;
            // Store.night = response.data.forecasts[0].parts.night;
            // Store.day = response.data.forecasts[0].parts.day;
            // Store.evening = response.data.forecasts[0].parts.evening;
            const newState = {
                City: response.data.geo_object.locality.name,
                nowDate: response.data.forecasts[0].date,
                nightShort: response.data.forecasts[0].parts.night_short,
                day_short: response.data.forecasts[0].parts.day_short,
                morning: response.data.forecasts[0].parts.morning,
                night: response.data.forecasts[0].parts.night,
                day: response.data.forecasts[0].parts.day,
                evening: response.data.forecasts[0].parts.evening,
                currentCity: '1',
            }
            return newState.City;

        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // выполняется всегда
        });
}
export default GetData;





