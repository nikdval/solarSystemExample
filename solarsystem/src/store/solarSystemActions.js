import apiConsumer from './utilities/apiConsumer';

export const SOLAR_LOAD_SUCCESS = "SOLAR_LOAD_SUCCESS";

export const solarSystemLoad = () => {
  return (dispatch) => apiConsumer({
    dispatch,
    url: "/solarSystem",
    onSuccess: solarLoadSuccess,
    onFailure: () => console.log("Error occured loading planets"),
    load: true
  });


};

const solarLoadSuccess = (response) => {
  return {
    type: SOLAR_LOAD_SUCCESS,
    planets: response.data,
  }
}