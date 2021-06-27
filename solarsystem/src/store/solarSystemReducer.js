import {SOLAR_LOAD} from './solarSystemActions';

const initialState = {
    planets:[],
    loading: false,
    error: null,
  };
  
  const solarSystemReducer = function (state = initialState, action) {
    switch (action.type) {
        case SOLAR_LOAD.BEGIN:
            return {
                ...state,
                loading:true
            };
        case SOLAR_LOAD.SUCCESS:
            return {
                ...state,
                loading:false,
                planets: action.planets
            }
        case SOLAR_LOAD.ERROR:
            return {
                ...state,
                loading:false,
                error: action.error
            }
    }

    return state;
  };
  
  export default solarSystemReducer;
  