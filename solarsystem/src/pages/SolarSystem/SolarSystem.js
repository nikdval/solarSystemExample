import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const SolarSystem = (props) =>{
    const planets = useSelector(state=> state.solar.planets);
    console.log(planets);
    
    return <p>Here will go the canvas for display</p>
}

export default SolarSystem;