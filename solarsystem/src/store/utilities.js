export const LOAD_BEGIN = "LOAD_BEGIN";
export const API_ERROR = "API_ERROR";
export const API = "API";

export const loadBegin = () => {
    return { type: LOAD_BEGIN }
}

export const apiError = (error) => {
    return {
        type: API_ERROR,
        error: error
    }
} 

export const apiAction = ({
    url = "",
    method = "GET",
    data = null,

    onSuccess = () => {},
    onFailure = () => {},
    load = true,
    headersOverride = null
  }) => {
    return {
      type: API,
      payload: {
        url,
        method,
        data,
        onSuccess,
        onFailure,
        load,
        headersOverride
      }
    };
  }