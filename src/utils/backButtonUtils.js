export function addBackButtonEvents(){
  const backButton = document.querySelector("#back-btn");

  backButton.addEventListener('click',()=>{
    window.location.hash = "#/home";
  });
  
}