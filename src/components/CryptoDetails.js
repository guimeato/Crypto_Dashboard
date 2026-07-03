import { getCrypto } from "../services/api.js";

export function cryptoDetails(crypto, currency = "usd"){
  
  return(
  `
    <section class="crypto-details">
      <img src="${crypto.image.large}" alt="${crypto.name}">

      <h1>${crypto.name} (${crypto.symbol.toUpperCase()})</h1>

      <p>Preço atual: ${crypto.market_data.current_price[currency]}</p>
      <p>Capitalização: ${crypto.market_data.market_cap[currency]}</p>
      <p>Maior preço (24h): ${crypto.market_data.high_24h[currency]}</p>
      <p>Menor preço (24h): ${crypto.market_data.low_24h[currency]}</p>

      <p>Ranking: #${crypto.market_cap_rank}</p>
      <p>Oferta circulante: ${crypto.market_data.circulating_supply}</p>

      <p>Variação 24h: ${crypto.market_data.price_change_percentage_24h}%</p>

      <button id="back-btn">Voltar</button>
    </section>

  `);
}
