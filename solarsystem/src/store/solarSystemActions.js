import axios from 'axios';

export const SOLAR_LOAD = {
    BEGIN: "SOLAR_LOAD_BEGIN",
    SUCCESS: "SOLAR_LOAD_SUCCESS",
    ERROR: "SOLAR_LOAD_ERROR",
};

export const solarSystemLoad = () => {
    return (dispatch) => {
      dispatch({ type: SOLAR_LOAD.BEGIN });
      axios.get("/solarSystem")
        .then((response) => {
          return dispatch({
            type: SOLAR_LOAD.SUCCESS,
            planets: response.data.data,
          });
        })
        .catch((error) => {
          return dispatch({ type: SOLAR_LOAD.ERROR, error });
        });
    };
  };