import { SearchInput } from "./SearchInput.js";

export function Header(){
  return(
    `
    <header>
      <div class="header-container">
        <div class="left-section">
          <a href="#/home"><strong>Crypto Dashboard</strong></a>
        </div>
        <div class="middle-section">
          ${SearchInput()}
        </div>
        <div class="right-section">
          <a href="#/favoritos">⭐ Favoritos</a>
        </div>
      </div>
      
    </header>
    `
  );
}