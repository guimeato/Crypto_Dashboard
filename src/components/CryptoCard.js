import { getTopCrypto } from "../services/api.js";
import { formatCurrency } from "../utils/formatCurrency.js";


export function cryptoCard(crypto, currency = 'usd'){
  return (
    `
     <div class="crypto-card">
        <h1>${crypto.name}</h1>
        <p>${formatCurrency(crypto.current_price, currency)}</p>
        <p>${formatCurrency(crypto.market_cap, currency)}</p>
        <p>${formatCurrency(crypto.high_24h, currency)}</p>
        <p>${formatCurrency(crypto.low_24h, currency)}</p>
      </div>
    `
  );
}