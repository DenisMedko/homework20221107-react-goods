import React from 'react';
import GoodsData from "../data/GoodsData";
import GoodClass from "./GoodClass";

class GoodsClass extends React.Component {
    
    render () {
        const goodsElements = GoodsData.map(good => <GoodClass 
            id = {good.id || 'no id'}
            name = {good.name || 'no name'}
            description = {good.description || 'no description'}
            price = {good.price || 0}
            qty = {good.qty || 'not available'}
        />);
        return (
            <article>
                <h2>Class components</h2> 
                {goodsElements}
            </article>
        );
    };
        
}

export default GoodsClass;