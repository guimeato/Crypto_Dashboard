import { getCrypto } from "../services/api.js";
import { formatCurrency } from "../utils/formatCurrency.js";
import { formatNumber } from "../utils/formatNumber.js";

export function cryptoDetails(crypto, currency = "usd"){
  
  return(
  `
    <section class="crypto-details">
      <img src="${crypto.image.large}" alt="${crypto.name}">

      <h1>${crypto.name} (${crypto.symbol.toUpperCase()})</h1>

      <p>Preço atual: ${formatCurrency(crypto.market_data.current_price[currency], currency)}</p>
      <p>Capitalização: ${formatCurrency(crypto.market_data.market_cap[currency], currency)}</p>
      <p>Maior preço (24h): ${formatCurrency(crypto.market_data.high_24h[currency], currency)}</p>
      <p>Menor preço (24h): ${formatCurrency(crypto.market_data.low_24h[currency], currency)}</p>

      <p>Ranking: #${crypto.market_cap_rank}</p>
      
      <p>Oferta circulante: ${formatNumber(crypto.market_data.circulating_supply, currency)}</p>
      <p>Variação 24h: ${crypto.market_data.price_change_percentage_24h.toFixed(3)}%</p>

      <button id="back-btn">Voltar</button>
    </section>

  `);
}
