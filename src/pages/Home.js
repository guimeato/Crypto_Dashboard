import { getCrypto, getTopCrypto } from "../services/api.js";
import { cryptoCard } from "../components/CryptoCard.js";
import { Header } from "../components/Header.js";
import { FavoriteCard } from "../components/FavoriteCard.js";

export async function HomePage(currency = 'usd'){
  const Topcryptos = await getTopCrypto(currency);

  return `
    ${Header()}

    <main>
      <div class="dashboard">
        <section class="container">
          <h2>TOP 10 Cryptomoedas</h2>
          ${Topcryptos.map((crypto)=>{
          return cryptoCard(crypto, currency);}).join("")}
        </section>
      </div> 
    </main>
  `;
}