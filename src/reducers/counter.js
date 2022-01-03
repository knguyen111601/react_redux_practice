const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload // payload is the parameter we gave to the action (5 in App)


        case 'DECREMENT':
            return state - 1

        default:
            return state
    }

}

export default counterReducer