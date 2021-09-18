import React, { createContext, useContext, useReducer } from 'react';

// This repares the Data Layer
export const StateContext = createContext();

// This will wrap the app and provide the Data layer, which means we will go to our index.js and implement the wrapping

export const StateProvider = ({ reducer, initialState, children }) => {
  // debugger
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// This pulls information from the data layer
export const useStateValue = () => useContext(StateContext);
