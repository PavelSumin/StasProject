const getDataTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    if (res.status !== 200) {
        throw new Error(`Response is not a 200, but ${res.status}`)
    }
    return await res.json()
}

export {getDataTodos}