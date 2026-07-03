import { getTopCrypto } from "../services/api.js";

export function cryptoCard(crypto){
  return (
    `
     <div class="crypto-card">
        <h1>${crypto.name}</h1>
        <p>${crypto.current_price}</p>
        <p>${crypto.market_cap}</p>
        <p>${crypto.high_24h}</p>
        <p>${crypto.low_24h}</p>
      </div>
    `
  );
}