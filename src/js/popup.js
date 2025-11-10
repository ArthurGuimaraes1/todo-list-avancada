export function popupCriarTarefa(id) {
  const popupNode = document.querySelector(id);
  const overlay = popupNode.querySelector(".overlay");
  const closeButton = popupNode.querySelector(".fechar-popUp");

  function abrirPopup() {
    popupNode.classList.add("active");
  }

  function fecharPopup() {
    popupNode.classList.remove("active");
  }

  overlay.addEventListener("click", fecharPopup);
  closeButton.addEventListener("click", fecharPopup);

  return abrirPopup;
}
