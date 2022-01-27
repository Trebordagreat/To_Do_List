function generateList (todoList, project) {
    let updatedList = [];
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].project === project || project === "All") {
            updatedList.push(todoList[i]);
        }
    }
    return updatedList;
}

export {generateList};