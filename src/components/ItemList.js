import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

class ItemList extends React.Component{
    state = {}

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.items !== prevProps.items) {
          this.setState({
              items: this.props.items
          });
        }
      }

    renderList(){
        return this.state.items?this.state.items.map(item => {
            return (
                <div key={item.name}>
                    <Item name={item.name} price={item.price}/>
                </div>
            )
        }) : <h4>No item</h4>;
    }
    
    render(){
        return(
            <div>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state =>{
    return { items: state.items }
}

export default connect(mapStateToProps, {})(ItemList);