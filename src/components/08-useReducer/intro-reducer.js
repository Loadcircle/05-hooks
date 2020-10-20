const initialState = [{
    id: 1,
    todo: 'Comprar leche',
    done: false
}];


const todoReducer = ( state = initialState, action )=>{

    //action? es igual a un if action && action.type
    if(action?.type == 'agregar'){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

console.log(todos)

const newTodo = {
    id: 2,
    todo: 'Comprar pan',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);


console.log(todos)