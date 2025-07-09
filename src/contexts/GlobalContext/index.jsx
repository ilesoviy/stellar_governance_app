import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { networkConfig } from '../WalletContext/config';


export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [chainIndex, setChainIndex] = useState(1);
    const [chainId, setChainId] = useState(0);

    useEffect(() => {
        let keys = Object.keys(networkConfig);
        setChainId(parseInt(networkConfig[keys[chainIndex]].chainId, 16));
    }, [chainIndex]);
    
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <React.StrictMode>
            <GlobalContext.Provider value={{ refreshPage, chainId, setChainIndex }}>
                {children}
            </GlobalContext.Provider>
        </React.StrictMode>
    );
};

export const useGlobal = () => {
    const globalManager = useContext(GlobalContext);
    return globalManager || [{}, async () => { }];
};
