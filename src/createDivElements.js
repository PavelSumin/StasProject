const createDivElements = (data) => {

    let className;
    let htmlSymbol;

    data.completed ?
        (htmlSymbol = '&#9989', className = "todo_completed") :
        (htmlSymbol = '&#9746', className = "todo")

    return `        
        <div class=${className}>
            <span>Id: ${data.id}.</span>
            <span>User Id: ${data.userId}.</span>
            <span>Title: ${data.title}.</span>
            <span>Completed: ${data.completed} ${htmlSymbol}</span>
        </div>                      
        `
}

export {createDivElements}