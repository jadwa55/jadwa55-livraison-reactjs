const userIdReducer = (state = false , action) => {
    switch (action.type) {
        case 'SETID' :
            return action.payload 
        default : 
        return state;
    }
}

export default userIdReducer;