import { configurarExclusaoTarefas } from "./tasks.js";
import { popupCriarTarefa } from "./popup.js";

configurarExclusaoTarefas();

const popup = popupCriarTarefa("#pop-up");
document.querySelector("#button-add").addEventListener("click", popup);