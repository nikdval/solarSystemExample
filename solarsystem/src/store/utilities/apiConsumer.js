import axios from "axios";
import { loadBegin, apiError } from './utilities';

const apiConsumer = ({
    dispatch,
    url = "",
    method = "GET",
    data = null,
    onSuccess = () => { },
    onFailure = () => { },
    load = true,
    headersOverride = null,
    // accessToken
}) => {
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";


    // axios default configs
    // axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
    // axios.defaults.headers.common["Content-Type"]="application/json";
    // axios.defaults.headers.common["Authorization"] = `Bearer${accessToken}`;


    if (load) {
        dispatch(loadBegin());
    }
    return axios
        .request({
            url,
            method,
            headersOverride,
            [dataOrParams]: data
        })
        .then(({ data }) => {
            dispatch(onSuccess(data));
        })
        .catch(error => {
            dispatch(apiError(error));
            dispatch(onFailure(error));
        })
}


export default apiConsumer;