import { formatCurrency } from "../utils/formatCurrency.js";

export function cryptoCard(crypto, currency = 'usd'){
  const change = crypto.price_change_percentage_24h.toFixed(2);

  const changeClass = change > 0 ? "positive" : change < 0 ? "negative" : "neutral";
  
  const icon = change > 0 ? "▲" : change < 0  ? "▼" : "•";
  

  return (
    `
      <article>
        <a class="crypto-card" href="#/crypto/${crypto.id}">
          <img src="${crypto.image}">
          <div class="crypto-card-info">

            <div class="crypto-card-symbol">
              <strong>${crypto.symbol.toUpperCase()}</strong>
              <p>/ ${currency.toUpperCase()}</p>
            </div>
            
            <p class="crypto-card-title">${crypto.name}</p>
            
          </div>
          
          <p class="current-price">${formatCurrency(crypto.current_price, currency)}</p>
          
          <p class="${changeClass}">${icon} ${crypto.price_change_percentage_24h.toFixed(2)}%</p>
           
        </a>
      </article>
    `
  );
}