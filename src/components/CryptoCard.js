import { getTopCrypto } from "../services/api.js";
import { formatCurrency } from "../utils/formatCurrency.js";


export function cryptoCard(crypto){
  return (
    `
     <div class="crypto-card">
        <h1>${crypto.name}</h1>
        <p>${formatCurrency(crypto.current_price)}</p>
        <p>${formatCurrency(crypto.market_cap)}</p>
        <p>${formatCurrency(crypto.high_24h)}</p>
        <p>${formatCurrency(crypto.low_24h)}</p>
      </div>
    `
  );
}