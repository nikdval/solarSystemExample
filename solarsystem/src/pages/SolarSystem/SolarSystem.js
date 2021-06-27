import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { solarSystemLoad } from '../../store/solarSystemActions';


const SolarSystem = (props) =>{
    const dispatch = useDispatch();
    const planets = useSelector(state=> state.solar.planets);
    console.log(planets);

    useEffect(()=>{
        dispatch(solarSystemLoad());
    },[dispatch]);

    return <p>Here will go the canvas for display</p>
}

export default SolarSystem;