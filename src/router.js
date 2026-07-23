import { render } from "./main.js";
import { DetailsPage } from "./pages/Details.js";
import { FavoritePage } from "./pages/Favorite.js";
import { HomePage } from "./pages/Home.js";
import { getCrypto } from "./services/api.js";
import { addBackButtonEvents } from "./utils/backButtonUtils.js";
import { addFavoriteEvents } from "./utils/favoriteUtils.js";
import { addSearchEvents } from "./utils/searchUtils.js";

export async function router(){
  const app = document.querySelector('#app');

  const hash = window.location.hash;

  if(!window.location.hash){
    window.location.hash = "#/home";
    return;
  }

  else if(hash.startsWith("#/crypto/")){
    const id = hash.split("/")[2];

    app.innerHTML = await DetailsPage(id);
    addFavoriteEvents(render);
    addSearchEvents();
    addBackButtonEvents();

    return;
  }
  else if(hash.startsWith("#/home")){
    app.innerHTML = await HomePage();
    addFavoriteEvents(render);
    addSearchEvents();

    return;
  }
  else if(hash.startsWith("#/favoritos")){
    app.innerHTML = await FavoritePage();
    addFavoriteEvents(render);
    addSearchEvents();
    
    return;
  }
}