const initialState = {
    users: [],
    maxId: 0
}

export function userReducer(state = initialState, action) {
    switch(action.type){
        case 'ADD_USER':
            //console.log(state);
            return Object.assign({}, state, {
                users: [
                    ...state.users,
                    {
                        ...action.payload,
                        id: state.maxId++
                    }
                ]
            })
        default:
            return state
    }
}