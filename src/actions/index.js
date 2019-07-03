export const addItem = item => {
    return {type: 'ADD_ITEM', payload: item};
}

export const increasePrice = item => {
    return {type: 'INCREASE_PRICE', payload: item.name};
}