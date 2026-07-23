import { getCrypto } from "../services/api.js";
import { isFavorite } from "../utils/favoriteUtils.js";
import { formatCurrency } from "../utils/formatCurrency.js";
import { formatNumber } from "../utils/formatNumber.js";

export function cryptoDetails(crypto, currency = "usd"){

    const DetailsChange = crypto.market_data.price_change_percentage_24h.toFixed(3);
  
    const DetailsChangeClass = DetailsChange > 0 ? "positive" : DetailsChange < 0 ? "negative" : "neutral";
    
    const DetailsIcon = DetailsChange > 0 ? "▲" : DetailsChange < 0  ? "▼" : "•";
    
    const DetailsFavorite = isFavorite(crypto.id) ? '⭐ ': '☆';
  
  return(
  `
    <article class="crypto-details">
      <div class="crypto-info">
        <div class="crypto-image"><img src="${crypto.image.large}" alt="${crypto.name}"></div>
        
        <div class="crypto-principal-info">
          <h1>${crypto.name} <span class="crypto-symbol"> (${crypto.symbol.toUpperCase()}) </span></h1>
          <p>${formatCurrency(crypto.market_data.current_price[currency], currency)}</p>
           <p class="${DetailsChangeClass}">${DetailsIcon} ${crypto.market_data.price_change_percentage_24h.toFixed(3)}%</p>
        </div>
       
        <span class="favorite-star" data-id="${crypto.id}">${DetailsFavorite}</span>

      </div>
     
      <div class="crypto-ad-info">
        <p class="details-card"> <span> Capitalização: </span>  ${formatCurrency(crypto.market_data.market_cap[currency], currency)}</p>
        <p class="details-card"> <span> Ranking:</span>  #  ${crypto.market_cap_rank}</p>
        <p class="details-card"> <span> Maior preço (24h): </span>  ${formatCurrency(crypto.market_data.high_24h[currency], currency)}</p>
        <p class="details-card"> <span> Menor preço (24h): </span>  ${formatCurrency(crypto.market_data.low_24h[currency], currency)}</p>
        
      </div>
     
      
      
    
      <button id="back-btn">Voltar</button>
    </article>

  `);
}


//<p> <span> Oferta circulante: </span> ${formatNumber(crypto.market_data.circulating_supply, currency)}</p>