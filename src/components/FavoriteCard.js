import { isFavorite } from "../utils/favoriteUtils.js";
import { formatCurrency } from "../utils/formatCurrency.js";

export function FavoriteCard(crypto, currency = 'usd'){

  const changeFavorite = crypto.price_change_percentage_24h.toFixed(2);

  const changeClassFavorite = changeFavorite > 0 ? "positive" : changeFavorite < 0 ? "negative" : "neutral";
  
  const iconFavorite = changeFavorite > 0 ? "▲" : changeFavorite < 0  ? "▼" : "•";

  const favorite = isFavorite(crypto.id) ? '⭐ ': '☆';

  return (
    `
      <article id="favorite-article">
        <a href="#/crypto/${crypto.id}" class="favorite-card-container">
          <img src="${crypto.image}">
          <div class="crypto-favorite-card-info">

            <div class="crypto-favorite-card-symbol">
              <strong>${crypto.symbol.toUpperCase()}</strong>
              <p>/ ${currency.toUpperCase()}</p>
            </div>
            
            <p class="crypto-favorite-card-title">${crypto.name}</p>
            
          </div>
          <div class="favorite-card-value">
            <p class="favorite-current-price">${formatCurrency(crypto.current_price, currency)}</p>
          
            <p class="${changeClassFavorite}">${iconFavorite} ${crypto.price_change_percentage_24h.toFixed(2)}%</p>
          </div>

          <span class="favorite-star" data-id="${crypto.id}">${favorite}</span>
         
        </a>
        
      </article>
    `
  );
}