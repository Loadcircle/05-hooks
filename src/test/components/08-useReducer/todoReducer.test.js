const { todoReducer } = require("../../../components/08-useReducer/todoReducer");
const { demoTodos } = require("../../fixtures/demoTodos");

describe('Pruebas en todoReducer', ()=>{


    test('Debe retornar un state', ()=>{
        const reducer = todoReducer();
        expect(typeof reducer).toBe('object');
        expect(reducer.length).toBe(0);
    });
    
    test('Debe retornar el state demotods1', ()=>{
        const reducer = todoReducer(demoTodos);
        expect(reducer).toEqual(demoTodos);
    });

    test('Debe de agregar n TODO', ()=>{
        const newTodo = {
            id: 3,
            desc: 'Aprende3',
            done: false,
        };
        const reducer = todoReducer(demoTodos, {type: 'add', payload: newTodo});

        expect(reducer.length).toBe(3);
        expect(reducer).toEqual([...demoTodos, newTodo]);
    });
    
    test('Debe de eliminar un todo', ()=>{

        const reducer = todoReducer(demoTodos, {type: 'delete', payload: 1});

        expect(reducer.length).toBe(1);
        expect(reducer).toEqual([demoTodos[1]]);
    });
    
    test('Debe de cambiar el valor done de un todo', ()=>{

        const reducer = todoReducer(demoTodos, {type: 'toggle', payload: 1});

        expect(reducer[0].done).toBe(true);
    });

});