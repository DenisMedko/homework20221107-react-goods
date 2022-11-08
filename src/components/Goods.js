import GoodsData from "../data/GoodsData";
import Good from "./Good";

const Goods = () => {
    const goodsElements = GoodsData.map(good => <Good 
        id = {good.id || 'no id'}
        name = {good.name || 'no name'}
        description = {good.description || 'no description'}
        price = {good.price || 0}
        qty = {good.qty || 'not available'}
    />);
    return (
        <article>
            <h2>Functional components</h2>
            {goodsElements}
        </article>
    );
}

export default Goods;