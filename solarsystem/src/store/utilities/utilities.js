export const LOAD_BEGIN = "LOAD_BEGIN";
export const API_ERROR = "API_ERROR";

export const loadBegin = () =>{
    return { type: LOAD_BEGIN};
}

export const apiError = (error) => {
    return {
        type: API_ERROR,
        error: error
    }
} 
