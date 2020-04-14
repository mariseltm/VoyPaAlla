import React, { createContext, useReducer } from 'react';
import { routeData } from './data/routes_data';

const initialState = {
    favoriteRoutes: [1, 2, 3, 4],
    recentRoutes: [5, 6, 7],
    recentRoutesLimit: 4,
};
const store = createContext(initialState);
const { Provider } = store;

const findRouteIdx = routeName => {
    return routeData.findIndex(x => x.routeName === routeName);
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'Add recent route':
                // If the route was already in the recent list, then we keep the state.
                const routeIdx = findRouteIdx(action.routeName);
                if (state.recentRoutes.indexOf(routeIdx) >= 0)
                    return state;

                // Else we add the new route to the recent list.
                const newState = { ...state };
                newState.recentRoutes.push(findRouteIdx(action.routeName));

                // If the amount of elements in the recent list is bigger than the limit, then we reduced to the limit
                if (newState.recentRoutes.length > state.recentRoutesLimit)
                    newState.recentRoutes.splice(0, 1);

                return newState;
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }