import { HomePage } from "../pages/Home.js";

export function isFavorite(id){
  const favorites = getFavorites();
  return favorites.includes(id);
}

export function getFavorites(){
  const favorites = localStorage.getItem("favorites");
  return JSON.parse(favorites) || [];
}

export function saveFavorite(id){
  const favorites = getFavorites();
  if(!favorites.includes(id)){
    favorites.push(id);
  }
  
  localStorage.setItem("favorites",JSON.stringify(favorites));
}

export function toggleFavorite(id){
  isFavorite(id)? removeFavorite(id) : saveFavorite(id);
}

export function removeFavorite(id){
  const favorites = getFavorites();
  const newFavorites = favorites.filter(item => item !== id);
  localStorage.setItem("favorites",JSON.stringify(newFavorites));
}

export function addFavoriteEvents(render){
  
  const stars = document.querySelectorAll('.favorite-star');

  stars.forEach((star)=>{
    const id = star.dataset.id;
    star.addEventListener('click',(event)=>{

      event.preventDefault();
      event.stopPropagation();

      toggleFavorite(id);

      render();
    });
  });
}
