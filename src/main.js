import { router } from "./router.js";

export async function render(){
  await router();
}

window.addEventListener("hashchange", router);

router();


