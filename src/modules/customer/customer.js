const initialState = {}

export const customerReducer = (state = initialState, action) => {
const { type, payload } = action;
console.log(payload, "dispatch");

switch(type) {
    case "CUSTOMER_UPDATE" : 
        return {
            ...state, ...payload}
    default :
        return state
        // throw new Error(`Unhandled type ${type} in userReducer`);
}
}


export const customerUpdate = (customer) => {
    return {
        type: "CUSTOMER_UPDATE",
        payload: {
            customer
        }
    }
}