import { createSlice } from '@reduxjs/toolkit';
import { convertToString, convertToInteger } from './tools';

const initialState = {
    chainId: 0,
    explorerUrl: '',
    rpcUrl: ''
};

const networkSlice = createSlice({
    name: 'chain',
    initialState,
    reducers: {
        updateChainId: (state, action) => {
            state.chainId = convertToInteger(action.payload);
        },

        updateExplorerUrl: (state, action) => {
            state.explorerUrl = convertToString(action.payload);
        },

        updateRpcUrl: (state, action) => {
            state.rpcUrl = convertToString(action.payload);
        }
    }
});

export const { updateChainId, updateExplorerUrl, updateRpcUrl } = networkSlice.actions;

export default networkSlice.reducer;
