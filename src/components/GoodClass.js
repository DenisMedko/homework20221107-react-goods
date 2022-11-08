import React from 'react';

class GoodClass extends React.Component {
    render() {
        const {name, description, price, qty} = this.props;
        return (
            <section>
                <h3>Title : {name}</h3>
                <p>About : {description}</p>
                <div>Price : {price}</div>
                <div>Qty : {qty}</div>
            </section>    
        );
    }    
}
export default GoodClass;