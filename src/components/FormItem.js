import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../actions';

class FormItem extends React.Component {
    state = {
        name : '', price:0
    };

    onNameChange(event){
        this.setState({
            name: event.target.value,
            price: this.state.price
        });
    }

    onPriceChange(event){
        this.setState({
            name: this.state.name,
            price: Number(event.target.value)
        });
    }

    render(){
        return (
            <div>
                <input
                    type="text"
                    name="item"
                    placeholder="Item name..."
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                    style={{ flex: "6" }}
                />
                <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.onPriceChange.bind(this)}
                    style={{ flex: "3" }}
                />
                <button
                    className="ui button primary"
                    onClick={() => this.props.addItem(this.state)}
                >Select</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state.items }
}

export default connect(mapStateToProps, { addItem })(FormItem);