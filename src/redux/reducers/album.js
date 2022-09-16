import { GET_ALBUMS } from "../actions"



const initialState = {
    list: []
}



const albumReducer = (state = initialState, action) => {
    switch (action.type){


case GET_ALBUMS:
    return{
        ...state,
        album: action.payload
    }


        default:
            return state
    }
}


export default albumReducer