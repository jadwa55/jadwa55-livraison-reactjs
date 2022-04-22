export const loginAction = () => {
    return {
        type: 'LOGIN'
    }
}

export const logoutAction = () => {
    return {
        type: 'LOGOUT'
    }
}

export const setRoleAction = () => {
    return {
        type: 'SETROLE'
    }
}

export const setIdAction = (id) => {
    return {
        type: 'SETID',
        payload: id
    }
}