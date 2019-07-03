import { combineReducers } from "redux";

const itemsReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state,action.payload];
        case 'INCREASE_PRICE':
                let items = [];
                console.log(action.payload)
                for(var i=0;i<state.length; i++){
                    var name = state[i].name
                    var price = state[i].price
                    if(name === action.payload){
                        items.push({
                            name: name,
                            price: price+1000
                        })
                    } else {
                        items.push({
                            name: name,
                            price: price
                        })
                    }
                }
                return [...items];
        default:
            return state;
    }
}

export default combineReducers({ items: itemsReducer });