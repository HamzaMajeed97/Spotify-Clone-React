import { configureStore, combineReducers } from '@reduxjs/toolkit'
import albumReducer from '../reducers/album'
import favouriteReducer from '../reducers/favourite'



const bigReducer = combineReducers({
    favrourite: favouriteReducer,
    album: albumReducer
})


const store = configureStore({
reducer : bigReducer


})

export default store






