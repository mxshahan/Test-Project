export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            state = action.user_data
        case 'LOGOUT':
            return {};
        case 'CREATE_USER':
            state = action.user_data
        default:
            return state;
    }
}