import React from 'react'

import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext()

const AppContext = () => {

    const navigate = useNavigate()

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContext