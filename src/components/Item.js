import React from 'react';
import {connect} from 'react-redux';
import { increasePrice } from '../actions';

class Item extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.price}</p>
                <button
                    className="ui button primary"
                    onClick={() => this.props.increasePrice(this.props)}
                >Increase</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { item: state.items }
}

export default connect(mapStateToProps, { increasePrice })(Item);