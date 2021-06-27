import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { solarSystemLoad } from '../../store/solarSystemActions';
import PlanetUI from '../../components/PlanetUI/PlanetUI';

const SolarSystem = (props) =>{
    const dispatch = useDispatch();
    const planets = useSelector(state=> state.solar.planets);

    useEffect(()=>{
        dispatch(solarSystemLoad());
    },[dispatch]);

    if(!planets || planets.length === 0 ) return <p>No Available data</p>
   
    return (
        <section>
            <PlanetUI planet={planets[2]}/>
        </section>
    )
}

export default SolarSystem;