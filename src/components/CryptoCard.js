import { formatCurrency } from "../utils/formatCurrency.js";

export function cryptoCard(crypto, currency = 'usd'){
  return (
    `
     <article class="crypto-card">
        <h1>${crypto.name}</h1>
        <p>Preço: ${formatCurrency(crypto.current_price, currency)}</p>
        <p>Market Cap: ${formatCurrency(crypto.market_cap, currency)}</p>
        <p>Máxima (24h)${formatCurrency(crypto.high_24h, currency)}</p>
        <p>Mínima (24h)${formatCurrency(crypto.low_24h, currency)}</p>
      </article>
    `
  );
}