const botaoExcluir = document.querySelectorAll(".button-delete");


//////////////////////////////////////EXCLUIR TAREFA
botaoExcluir.forEach(button => {
    button.addEventListener('click', (e)=>{
        const taskItem = e.target.closest('.task-item');
        if (taskItem){
            taskItem.remove();
        }
    })
})

////////////////////////////// ABRIR E FECHAR O POP-UP DE CRIAR TAREFA
function popupCriarTarefa (id){
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");
    let closeButton = popupNode.querySelector(".fechar-popUp");
    function abrirPopup(){
        popupNode.classList.add("active");
    }
    function fecharPopup(){
        popupNode.classList.remove("active");
    }
    overlay.addEventListener('click', fecharPopup);
    closeButton.addEventListener('click', fecharPopup);
    return abrirPopup;
}

let popup = popupCriarTarefa("#pop-up");
document.querySelector("#button-add").addEventListener('click', popup);