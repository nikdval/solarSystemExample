import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { solarSystemLoad } from './solarSystemActions'

jest.mock('axios');
const mockStore = configureMockStore([thunk,promise]);

describe("Solar System Actions", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            planets: [],
            loading: false,
            error: null,
        });
    });

    it("dispatches SOLAR_LOAD action and returns data on success", async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: [{
                    name: "Test Planet",
                    picture: "test_picture.js",
                    age: 10,
                    mass: "4 x 10^23"
                }]
            })
        );

        await store.dispatch(solarSystemLoad());
        const actions = store.getActions();

        expect.assertions(3);
        expect(actions[0].type).toEqual("SOLAR_LOAD_BEGIN");
        expect(actions[1].type).toEqual("SOLAR_LOAD_SUCCESS");
        expect(actions[1].planets[0].name).toEqual("Test Planet");
    });
});