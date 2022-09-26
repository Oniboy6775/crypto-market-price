import React, { useReducer } from "react";
import { useContext } from "react";
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  CHANGE_PAGE,
} from "./actions";
import { reducer } from "./reducer";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    coinList: [],
    pageNumber: 1,
    message: "",
    priceChange: "24H",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: page });
  };
  const fetchData = async () => {
    const { pageNumber } = state;
    dispatch({ type: FETCH_DATA_BEGIN });
    try {
      let response = await axios.get(`/fetchData?page=${pageNumber}`);
      let sampleResponse = [
        {
          id: 1027,
          name: "Ethereum",
          symbol: "ETH",
          slug: "ethereum",
          num_market_pairs: 6083,
          date_added: "2015-08-07T00:00:00.000Z",
          tags: [
            "mineable",
            "pow",
            "smart-contracts",
            "ethereum-ecosystem",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "hashkey-capital-portfolio",
            "kenetic-capital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "injective-ecosystem",
          ],
          max_supply: null,
          circulating_supply: 122325262.499,
          total_supply: 122325262.499,
          platform: null,
          cmc_rank: 2,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-09-11T11:00:00.000Z",
          quote: {
            USD: {
              price: 1760.8220757155525,
              volume_24h: 12388831614.775146,
              volume_change_24h: -22.482,
              percent_change_1h: -0.0097222,
              percent_change_24h: 2.12544435,
              percent_change_7d: 13.24504443,
              percent_change_30d: -6.22811624,
              percent_change_60d: 64.31533279,
              percent_change_90d: 43.53306004,
              market_cap: 215393022625.939,
              market_cap_dominance: 20.3551,
              fully_diluted_market_cap: 215393022625.94,
              tvl: null,
              last_updated: "2022-09-11T11:00:00.000Z",
            },
          },
        },
        {
          id: 825,
          name: "Tether",
          symbol: "USDT",
          slug: "tether",
          num_market_pairs: 39524,
          date_added: "2015-02-25T00:00:00.000Z",
          tags: [
            "payments",
            "stablecoin",
            "asset-backed-stablecoin",
            "avalanche-ecosystem",
            "solana-ecosystem",
            "arbitrum-ecosytem",
            "moonriver-ecosystem",
            "injective-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
          ],
          max_supply: null,
          circulating_supply: 67652203603.29136,
          total_supply: 69156782826.49281,
          platform: {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
          },
          cmc_rank: 3,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-09-11T11:00:00.000Z",
          quote: {
            USD: {
              price: 1.0002714852392065,
              volume_24h: 48208415269.885826,
              volume_change_24h: -25.562,
              percent_change_1h: 0.00141225,
              percent_change_24h: -0.00851973,
              percent_change_7d: 0.02556449,
              percent_change_30d: -0.01422308,
              percent_change_60d: 0.10675636,
              percent_change_90d: 0.20115662,
              market_cap: 67670570177.969444,
              market_cap_dominance: 6.3973,
              fully_diluted_market_cap: 69175557872.22,
              tvl: null,
              last_updated: "2022-09-11T11:00:00.000Z",
            },
          },
        },
        {
          id: 3408,
          name: "USD Coin",
          symbol: "USDC",
          slug: "usd-coin",
          num_market_pairs: 6158,
          date_added: "2018-10-08T00:00:00.000Z",
          tags: [
            "medium-of-exchange",
            "stablecoin",
            "asset-backed-stablecoin",
            "fantom-ecosystem",
            "arbitrum-ecosytem",
            "moonriver-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
          ],
          max_supply: null,
          circulating_supply: 51680024318.89753,
          total_supply: 51680024318.89753,
          platform: {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            token_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          },
          cmc_rank: 4,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-09-11T11:00:00.000Z",
          quote: {
            USD: {
              price: 0.9999481620376979,
              volume_24h: 5509239154.215606,
              volume_change_24h: -18.4665,
              percent_change_1h: 0.0095221,
              percent_change_24h: 0.00805227,
              percent_change_7d: -0.00752196,
              percent_change_30d: 0.01690778,
              percent_change_60d: -0.01483893,
              percent_change_90d: -0.02289068,
              market_cap: 51677345331.74512,
              market_cap_dominance: 4.8863,
              fully_diluted_market_cap: 51677345331.75,
              tvl: null,
              last_updated: "2022-09-11T11:00:00.000Z",
            },
          },
        },
        {
          id: 1839,
          name: "BNB",
          symbol: "BNB",
          slug: "bnb",
          num_market_pairs: 1098,
          date_added: "2017-07-25T00:00:00.000Z",
          tags: [
            "marketplace",
            "centralized-exchange",
            "payments",
            "smart-contracts",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "moonriver-ecosystem",
            "bnb-chain",
          ],
          max_supply: 200000000,
          circulating_supply: 161337261.09,
          total_supply: 161337261.09,
          platform: null,
          cmc_rank: 5,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-09-11T11:00:00.000Z",
          quote: {
            USD: {
              price: 295.3215649964777,
              volume_24h: 742443506.5970482,
              volume_change_24h: -24.167,
              percent_change_1h: 0.05562808,
              percent_change_24h: 0.42737658,
              percent_change_7d: 6.10146518,
              percent_change_30d: -7.9095767,
              percent_change_60d: 30.5573218,
              percent_change_90d: 31.65739358,
              market_cap: 47646372437.34413,
              market_cap_dominance: 4.5011,
              fully_diluted_market_cap: 59064312999.3,
              tvl: null,
              last_updated: "2022-09-11T11:00:00.000Z",
            },
          },
        },
        {
          id: 4687,
          name: "Binance USD",
          symbol: "BUSD",
          slug: "binance-usd",
          num_market_pairs: 5058,
          date_added: "2019-09-20T00:00:00.000Z",
          tags: [
            "stablecoin",
            "asset-backed-stablecoin",
            "binance-chain",
            "harmony-ecosystem",
            "moonriver-ecosystem",
            "usd-stablecoin",
          ],
          max_supply: null,
          circulating_supply: 20003342404.819256,
          total_supply: 20003342404.819256,
          platform: {
            id: 1839,
            name: "BNB",
            symbol: "BNB",
            slug: "bnb",
            token_address: "BUSD-BD1",
          },
          cmc_rank: 6,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-09-11T11:00:00.000Z",
          quote: {
            USD: {
              price: 1.0001169416713078,
              volume_24h: 8802391946.82801,
              volume_change_24h: -36.573,
              percent_change_1h: -0.00493213,
              percent_change_24h: 0.04237915,
              percent_change_7d: -0.01257883,
              percent_change_30d: 0.03943857,
              percent_change_60d: -0.10138782,
              percent_change_90d: -0.13919192,
              market_cap: 20005681629.111816,
              market_cap_dominance: 1.8916,
              fully_diluted_market_cap: 20005681629.11,
              tvl: null,
              last_updated: "2022-09-11T11:00:00.000Z",
            },
          },
        },
      ];
      const { data } = response.data;
      let newArray = data.map((eachCoin) => {
        const {
          id,
          name,
          symbol,
          date_added,
          circulating_supply,
          total_supply,
          last_updated,
          quote: {
            USD: {
              price,
              percent_change_1h,
              percent_change_24h,
              percent_change_7d,
              percent_change_30d,
              percent_change_60d,
              percent_change_90d,
              market_cap,
            },
          },
        } = eachCoin;
        return {
          coinName: name,
          symbol,
          id,
          price: price.toFixed(2),
          totalSupply: total_supply,
          circulatingSupply: circulating_supply,
          updatedAt: last_updated,
          listedOn: date_added,
          priceChanges: {
            "1H": percent_change_1h.toFixed(2),
            "24H": percent_change_24h.toFixed(2),
            "7D": percent_change_7d.toFixed(2),
            "30D": percent_change_30d.toFixed(2),
            "60D": percent_change_60d.toFixed(2),
            "90D": percent_change_90d.toFixed(2),
          },
          marketCap: market_cap,
        };
      });
      dispatch({ type: FETCH_DATA_SUCCESS, payload: newArray });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_DATA_ERROR });
    }
  };
  return (
    <AppContext.Provider value={{ ...state, changePage, fetchData }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useAppContext };
