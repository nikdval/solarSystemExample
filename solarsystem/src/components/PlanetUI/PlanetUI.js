import React from 'react';
import './PlanetUI.scss';

const metadata = [
     { 
        type: 'age',
        label:'Age',
        units: 'bilion years'
     },
     { 
        type: 'mass',
        label:'Mass',
        units: 'kg'
     }
 ]

/**
 * Planet display
 * @param {object} planet 
 */
const PlanetUI = ({planet})=>{
    const rows = [];
    metadata.map(item=>{
        rows.push(
            <tr key={item.type}>
                <td>{item.label}:</td>
                <td>{planet[item.type] || "-"} {item.units}</td>
            </tr>
        )
    })

    return (
        <div className="planet">
            <div className="planet_information">
                <h2>{planet.name}</h2>
                <table >
                    <tbody>{rows}</tbody>
                </table>
            </div>
            <img src={planet.imageUri} alt={planet.name} />
        </div>
    )
}

export default PlanetUI;