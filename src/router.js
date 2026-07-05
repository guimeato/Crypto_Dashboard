import { DetailsPage } from "./pages/Details.js";
import { HomePage } from "./pages/Home.js";
import { getCrypto } from "./services/api.js";

export async function router(){
  const app = document.querySelector('#app');

  const hash = window.location.hash;

  if(hash.startsWith("#/crypto/")){
    const id = hash.split("/")[2];

    app.innerHTML = await DetailsPage(id);

    return;
  }
  app.innerHTML = await HomePage();
}