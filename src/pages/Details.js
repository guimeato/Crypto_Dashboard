import { cryptoDetails } from "../components/CryptoDetails.js";
import { Header } from "../components/Header.js";
import { getCrypto } from "../services/api.js";

export async function DetailsPage(id, currency = 'usd'){
  const crypto = await getCrypto(id);

  return `
    ${Header()}

    <main>
      <div class="details-dashboard">
        <section ="details-container">
          ${cryptoDetails(crypto, currency)}
        </section>
      </div>
    </main>

   
  `
}