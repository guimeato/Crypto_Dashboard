import { getTopCrypto } from "../services/api.js";
import { cryptoCard } from "../components/CryptoCard.js";

export async function HomePage(currency = 'usd'){
  const Topcryptos = await getTopCrypto(currency);

  const cryptos = Topcryptos.map((crypto)=>{
    return cryptoCard(crypto, currency);
  }).join("");


  return cryptos;
}