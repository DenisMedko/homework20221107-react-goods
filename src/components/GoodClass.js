import React from 'react';

class GoodClass extends React.Component {
    render() {
        const props = this.props;
        return (
            <section>
            <h3>Title : {props.name}</h3>
            <p>About : {props.description}</p>
            <div>Price : {props.price}</div>
            <div>Qty : {props.qty}</div>
            </section>    
        );
    }    
}
export default GoodClass;