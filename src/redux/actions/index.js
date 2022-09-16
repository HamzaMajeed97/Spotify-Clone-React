export const GET_ALBUMS = 'GET_ALBUMS'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'


  const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen'


  export const getJobsAction = (query) => {
    return async (dispatch) => {
      try {
      
        const response = await fetch(URL + query )
        if (response.ok) {
          const { data } = await response.json()
          dispatch({
            type: GET_ALBUMS,
            payload: data,
          })
       
        } else {
        console.log('something went wrong')
       
        }
      } catch (error) {
        console.log(error)
      
    
      }
    }
  }
  