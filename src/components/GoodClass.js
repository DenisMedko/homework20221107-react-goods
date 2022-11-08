import React from 'react';

class GoodClass extends React.Component {
    render() {
        return (
            <section>
            <h3>Title : {this.props.name}</h3>
            <p>About : {this.props.description}</p>
            <div>Price : {this.props.price}</div>
            <div>Qty : {this.props.qty}</div>
            </section>    
        );
    }    
}
export default GoodClass;