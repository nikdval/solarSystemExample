import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { solarSystemLoad } from '../../store/solarSystemActions';
import PlanetUI from '../../components/PlanetUI/PlanetUI';
import './SolarSystem.scss';

/**
 * Solar System page
 * no props needed
 */
const SolarSystem = (props) =>{
    const dispatch = useDispatch();
    const planets = useSelector(state=> state.solar.planets);
   
    // Load data once
    useEffect(()=>{
        dispatch(solarSystemLoad());
    },[dispatch]);

    if(!planets || planets.length === 0 ) return <p>No Available data</p>;
    
    const planetsView = planets.map( planetData => {
        return <PlanetUI key={planetData.name} planet={planetData} />;
    });
    
    return (
        <section className="solar-system_section">
            <div className="solar-system_planets">{planetsView}</div>
        </section>
    )
}

export default SolarSystem;