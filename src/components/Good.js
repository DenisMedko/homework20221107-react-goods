const Good = (props) => {
    return (
        <section>
            <h3>Title : {props.name}</h3>
            <p>About : {props.description}</p>
            <div>Price : {props.price}</div>
            <div>Qty : {props.qty}</div>
        </section>
    );
}
export default Good;