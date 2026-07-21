import { FavoriteCard } from "../components/FavoriteCard.js";
import { Header } from "../components/Header.js";
import { getFavoriteCrypto } from "../services/api.js";
import { getFavorites } from "../utils/favoriteUtils.js";

export async function FavoritePage(currency = 'usd'){
  const cryptos = await getFavoriteCrypto(currency);

  const message = `
   <div class="empty-favorite-message">
    <p>Não há cryptomoeda favoritada!</p>
    <p>Clique na estrela e favorite uma.</p>
  </div>
  `

  const cryptoFavoriteCard = cryptos.length === 0 ? message : cryptos.map((crypto)=>{
              return FavoriteCard(crypto);
            }).join("")
  return (
    `
    ${Header()}
  
      <main>
        <div class="favorite-dashboard">
          <h2>⭐ Favoritos</h2>
          <section class="favorite-container">
            ${cryptoFavoriteCard}
          </section>
        </div> 
      </main>
      
    `
  );
}