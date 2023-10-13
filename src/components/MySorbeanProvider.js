import React from 'react'
import {SorobanReactProvider} from '@soroban-react/core';
import { allowedChains} from './soroban/allowedChains';
import { allowedConnectors } from './soroban/allowedConnectors';
 
  export default function MySorobanReactProvider({children}) {
    return (
      <SorobanReactProvider
        chains={allowedChains}
        connectors={allowedConnectors}>
          {children}
      </SorobanReactProvider>
    )
  } 