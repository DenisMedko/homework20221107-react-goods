const Good = (props) => {
    const {name, description, price, qty} = props;
    return (
        <section>
            <h3>Title : {name}</h3>
            <p>About : {description}</p>
            <div>Price : {price}</div>
            <div>Qty : {qty}</div>
        </section>
    );
}
export default Good;