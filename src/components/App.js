import React from 'react';
import ItemList from './ItemList';
import FormItem from './FormItem';

const App = () => {
    return (
        <div>
        <h1>Shop</h1>
            <ItemList />
            <FormItem />
        </div>
    );
};

export default App;