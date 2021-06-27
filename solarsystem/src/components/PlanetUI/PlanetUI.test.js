import React from "react";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

import PlanetUI from './PlanetUI';

describe("PlanetUI component", ()=>{
    beforeEach(() => {
        const testPlanet = {
            name: "Test Planet",
            picture: "test_picture.js",
            age: 10,
            mass: "4 x 10^23"
        }

        render(<PlanetUI planet={testPlanet} />)
    });
    test("renders planet name", ()=>{
        const planetName = screen.getByText("Test Planet");
        expect(planetName).toBeInTheDocument;
    });
    test("renders age and mass", ()=>{
        const planetAge = screen.getByText("10 bilion years");
        const planetMass = screen.getByText("4 x 10^23 kg");
        expect(planetAge).toBeInTheDocument;
        expect(planetMass).toBeInTheDocument;
    });
});