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
                <h2 className="planet_information-title">{planet.name}</h2>
                <table className="planet_information-table">
                    <tbody>{rows}</tbody>
                </table>
            </div>
        </div>
    )
}

export default PlanetUI;