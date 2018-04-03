export const loginUser = (user_data) => ({
    type: 'LOGIN',
    user_data
});

export const startLogin = (body) => {
    // console.log(body)
    return (dispatch) => {
        dispatch(loginUser(body))
    }
}

export const createUser = (user_data) => ({
    type: 'CREATE_USER', 
    user_data
})

export const startCreateUser = (body) => {
    return (dispatch) => {
        dispatch(createUser(body));
    }
}

export const LogoutUser = () => ({
    type: 'LOGOUT'
})