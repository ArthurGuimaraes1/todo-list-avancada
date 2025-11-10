export function configurarExclusaoTarefas() {
  const botaoExcluir = document.querySelectorAll(".button-delete");


    botaoExcluir.forEach(button => {
        button.addEventListener('click', (e)=>{
            const taskItem = e.target.closest('.task-item');
            if (taskItem){
                taskItem.remove();
            }
        })
    })
}