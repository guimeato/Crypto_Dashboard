import { API_KEY } from '../config.js'
import { getFavorites } from '../utils/favoriteUtils.js'

const BASE_URL = "https://api.coingecko.com/api/v3";

export async function getTopCrypto(currency = 'usd'){
  try{
    const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&x_cg_demo_api_key=${API_KEY}`);

    const data = await response.json();

    return data;
  }
  catch(error){
    console.log('Erro ao carregar as principais cryptos');
  }
  
}

export async function getCrypto(id) {
  try{
    const response = await fetch(`${BASE_URL}/coins/${id}?x_cg_demo_api_key=${API_KEY}`);

    const data = await response.json();

    return data;
  }
  catch(error){
    console.log(`Erro ao carregar a crypto ${id}`);
  }
  
}

export async function getFavoriteCrypto(currency = 'usd'){
  try{
    const favorites = getFavorites();

    if(favorites.length === 0){
      return [];
    }

    const favoritesString = favorites.join(",");
    
    const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=${currency}&ids=${favoritesString}`);
    
    const data = await response.json();
    
    return data;
  }
  catch(error){
    console.log('Erro ao carregar as cryptomoedas favoritas');
  }
  
}
