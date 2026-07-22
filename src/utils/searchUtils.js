import { searchCrypto } from "../services/api.js";

export async function addSearchEvents(){
  try{
     const input = document.querySelector("#search-input");

  input.addEventListener('keydown',async (event)=>{
    if(event.key !== "Enter"){
      return;
    }
    const query = input.value.trim();

    if(!query){
      return;
    }

    const cryptos = await searchCrypto(query);

    if(cryptos.length === 0){
      console.log("Criptomoeda não encontrada");
      return;
    }
    const crypto = cryptos[0];

    window.location.hash = `#/crypto/${crypto.id}`

  });
  }
  catch(error){
    console.log("Erro ao buscar cryptomoeda");
  }
 
}