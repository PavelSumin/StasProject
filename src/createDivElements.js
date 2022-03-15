const createDivElements = (data) => {
  // такую конструкцию лучше не юзать, плохо читается
  //    2 присванивания норм либо прямо в шаблоне вычислять
  // data.completed ?
  //     (htmlSymbol = '&#9989', className = "todo_completed") :
  //     (htmlSymbol = '&#9746', className = "todo")

  return `        
        <div class="todo ${data.completed ? "todo_completed" : ""}">
            <span>Id: ${data.id}.</span>
            <span>User Id: ${data.userId}.</span>
            <span>Title: ${data.title}.</span>
            <span>Completed: ${data.completed ? "&#9989" : "&#9746"}</span>
        </div>                      
        `;
};

export { createDivElements };
