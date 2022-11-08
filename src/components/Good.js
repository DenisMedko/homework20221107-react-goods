const Good = (props) => {
    return (
        <section>
            <h2>Title : {props.name}</h2>
            <p>About : {props.description}</p>
            <div>Price : {props.price}</div>
            <div>Qty : {props.qty}</div>
        </section>
    );
}
export default Good;