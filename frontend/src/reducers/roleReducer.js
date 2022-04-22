const roleReducer = (state = false , action) => {
    switch (action.type) {
        case 'SETROLE' :
            return action.payload 
        default : 
        return state;
    }
}

export default roleReducer;