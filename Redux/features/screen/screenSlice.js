import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataMoscow = createAsyncThunk('screen/getDataMoscow',
    async (_, { rejectWithValue, dispatch, lat = '55.75396', lon = '37.620393' }) => {
        const res = await axios.get('https://api.weather.yandex.ru/v2/forecast?extra=true&hours=false', {
            headers: { 'X-Yandex-API-Key': 'c862fadf-0f19-4cd7-abd7-6f13a06bd115' },
            params: {
                lat: lat,
                lon: lon,
            }
        })
        dispatch(setData(res.data))
    })
export const getDataVoronezh = createAsyncThunk('screen/getDataVoronezh',
    async (_, { rejectWithValue, dispatch, lat = '51.672', lon = '39.1843' }) => {
        const res = await axios.get('https://api.weather.yandex.ru/v2/forecast?extra=true&hours=false', {
            headers: { 'X-Yandex-API-Key': 'c862fadf-0f19-4cd7-abd7-6f13a06bd115' },
            params: {
                lat: lat,
                lon: lon,
            }
        })

        dispatch(setData(res.data))
    })
export const getDataRostov = createAsyncThunk('screen/getDataRostov',
    async (_, { rejectWithValue, dispatch, lat = '47.2313', lon = '39.7233' }) => {
        const res = await axios.get('https://api.weather.yandex.ru/v2/forecast?extra=true&hours=false', {
            headers: { 'X-Yandex-API-Key': 'c862fadf-0f19-4cd7-abd7-6f13a06bd115' },
            params: {
                lat: lat,
                lon: lon,
            }
        })
        // console.log('state= ' + state);
        dispatch(setData(res.data))
    })

const initialState = {
    City: 'Test',
    nowDate: '',
    nightShort: '',
    day_short: '',
    morning: '',
    night: '',
    day: '',
    evening: '',
    currentCity: '1',
    lat: '55.75396',
    lon: '37.620393',
    time: '23'
}

export const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setCurrentCity: (state, action) => {
            state.currentCity = action.payload
        },
        setData: (state, action) => {
            let currentTime = new Date().getHours()
            console.log(currentTime)
            state.time = String(currentTime)
            state.City = action.payload.geo_object.locality.name
            state.nowDate = action.payload.forecasts[0].date
            state.nightShort = action.payload.forecasts[0].parts.night_short
            state.day_short = action.payload.forecasts[0].parts.day_short
            state.morning = action.payload.forecasts[0].parts.morning
            state.night = action.payload.forecasts[0].parts.night
            state.day = action.payload.forecasts[0].parts.day
            state.evening = action.payload.forecasts[0].parts.evening
        },
    },
    extraReducers: {
        [getDataMoscow.fulfilled]: () => console.log('fulfilled_getDataMoscow'),
        [getDataVoronezh.fulfilled]: () => console.log('fulfilled_getDataVoronezh'),
        [getDataRostov.fulfilled]: () => console.log('fulfilled_getDataRostov'),
    }
})

export const { setCurrentCity } = screenSlice.actions
export const { setData } = screenSlice.actions

export default screenSlice.reducer