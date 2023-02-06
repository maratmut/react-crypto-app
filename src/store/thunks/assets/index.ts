import { createAsyncThunk } from '@reduxjs/toolkit';
import { coinGeckoApi } from '../../../utils/axios';

export const getFavoriteAssets = createAsyncThunk(
  'coin/markets',
  async (data: string, { rejectWithValue }) => {
    try {
      const assets = await coinGeckoApi.get(`coins/${data}/market_chart?vs_currency=usd&days=1`);
      return {name: data, data: assets.data}
      
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        rejectWithValue(error.message);
      }
    }
  },
);
