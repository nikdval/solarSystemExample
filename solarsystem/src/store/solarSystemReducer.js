import { LOAD_BEGIN, API_ERROR} from './utilities'
import { SOLAR_LOAD_SUCCESS } from './solarSystemActions';

const initialState = {
    planets:[],
    loading: false,
    error: null,
  };
  
  const solarSystemReducer = function (state = initialState, action) {
    switch (action.type) {
        case LOAD_BEGIN:
            return {
                ...state,
                loading:true
            };
        case SOLAR_LOAD_SUCCESS:
            return {
                ...state,
                loading:false,
                planets: action.planets
            }
        case API_ERROR:
            return {
                ...state,
                loading:false,
                error: action.error
            }
    }

    return state;
  };
  
  export default solarSystemReducer;
  