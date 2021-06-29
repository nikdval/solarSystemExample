import { apiAction } from './utilities';

export const SOLAR_LOAD_SUCCESS = "SOLAR_LOAD_SUCCESS";

export const solarSystemLoad = () => {
  return apiAction({
    url: "/solarSystem",
    onSuccess: solarLoadSuccess,
    onFailure: () => console.log("Error occured loading articles"),
    load: true
  });
};

const solarLoadSuccess = (response) => {
  return {
    type: SOLAR_LOAD_SUCCESS,
    planets: response.data,
  }
}