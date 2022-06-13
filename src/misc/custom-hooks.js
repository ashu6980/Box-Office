/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useReducer } from 'react';

function showsReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.showId];
    }
    case 'REMOVE': {
      return prevState.filter(showId => showId !== action.showId);
    }

    default:
      return prevState;
  }
}

function userPersistedReducer(reducer, initalState, key) {
  const [state, dispatch] = useReducer(reducer, initalState, initial => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.getItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, dispatch];
}

export function useShows(key = 'shows') {
  return userPersistedReducer(showsReducer, [], key);
}
