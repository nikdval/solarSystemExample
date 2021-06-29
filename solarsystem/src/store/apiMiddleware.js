import axios from 'axios';
import { loadBegin, apiError, API } from './utilities';

const apiMiddleware = ({ dispatch }) => next => action => {
    next(action);

    if (action.type !== API) return;

    const {
        url,
        method,
        data,
        // accessToken,
        onSuccess,
        onFailure,
        load,
        headers
    } = action.payload;

    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";


    // axios default configs
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
    axios.defaults.headers.common["Content-Type"]="application/json";
    // axios.defaults.headers.common["Authorization"] = `Bearer${token}`;


    if (load) {
      dispatch(loadBegin());
    }

    axios
        .request({
            url,
            method,
            headers,
            [dataOrParams]: data
        })
        .then(({ data }) => {
            dispatch(onSuccess(data));
        })
        .catch(error => {
            dispatch(apiError(error));
            dispatch(onFailure(error));
        })
};

export default apiMiddleware;