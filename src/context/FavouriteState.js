import React, { useEffect, useReducer } from 'react';

import favouriteContext from './favouriteContext';

const favouriteReducer = (state, action) => {
    switch(action.type) {
        case 'add': return [...state, action.id];
        case 'remove': return state.filter(id => id !== action.id);
        default: return state;
    }
}

const FavouriteState = ({ children }) => {
    const key = "Favourite";
    const [favourite, setFavourite] = useReducer(favouriteReducer, [], (initial) => {
      const savedFavourite = localStorage.getItem(key);

      return savedFavourite ? JSON.parse(savedFavourite) : initial;
    })

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(favourite))
    }, [favourite])

  return (
    <favouriteContext.Provider value={{favourite, setFavourite}}>
        {children}
    </favouriteContext.Provider>
  )
}

export default FavouriteState;