import { getTopCrypto } from "../services/api.js";
import { cryptoCard } from "../components/CryptoCard.js";
import { Header } from "../components/Header.js";

export async function HomePage(currency = 'usd'){
  const Topcryptos = await getTopCrypto(currency);

  return `
    ${Header()}

    <main class="container">
      ${Topcryptos.map((crypto)=>{
        return cryptoCard(crypto, currency);}).join("")}
    </main>
  `;
}