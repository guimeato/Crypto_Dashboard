import { cryptoDetails } from "../components/CryptoDetails.js";
import { Header } from "../components/Header.js";
import { getCrypto } from "../services/api.js";

export async function DetailsPage(id, currency = 'usd'){
  const crypto = await getCrypto(id);

  return `
    ${Header()}

    ${cryptoDetails(crypto, currency)}
  `
}