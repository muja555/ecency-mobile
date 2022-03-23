import { getLatestQuotes } from '../../providers/ecency/ecency';
import { SET_SELECTED_COINS, SET_PRICE_HISTORY, SET_COINS_DATA, SET_COIN_ACTIVITIES, SET_COIN_QUOTES, RESET_WALLET_DATA } from '../constants/constants';
import { CoinActivitiesCollection, CoinBase, CoinData } from '../reducers/walletReducer';

export const setSelectedCoins = (coins: CoinBase[]) => ({
  payload: coins,
  type: SET_SELECTED_COINS,
});

export const setCoinsData = (data:{[key:string]:CoinData}, vsCurrency:string, username:string) => ({
    payload:{
        data,
        vsCurrency,
        username,
    },
    type:SET_COINS_DATA
})

export const setPriceHistory = (coinId:string, vsCurrency:string, data:number[]) => ({
    payload: {
        id:coinId,
        vsCurrency,
        data
    },
    type: SET_PRICE_HISTORY
})

export const setCoinActivities = (coinId:string, data:CoinActivitiesCollection) => ({
    payload: {
        id:coinId,
        data,
    },
    type: SET_COIN_ACTIVITIES
})

export const resetWalletData = () => ({
    type: RESET_WALLET_DATA
})


export const fetchCoinQuotes = () => (dispatch, getState) =>
    getLatestQuotes(getState().application.currency.currencyRate).then((quotes) =>
    dispatch({
      type: SET_COIN_QUOTES,
      payload: { ...quotes },
    }),
  );
