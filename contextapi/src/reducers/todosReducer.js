export const todosReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TODO':
                return [...state, { text: action.text, id: `${Math.random()}` }]
            case 'REMOVE_TODO':
                return state.filter((todo) => {
                    return todo.id !== action.id;
                })
            default:
                return state;
        }
    }