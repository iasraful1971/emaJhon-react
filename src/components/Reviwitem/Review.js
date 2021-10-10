import React from 'react';

const Review = (props) => {
    const {name , price , quantity , img , key} =props.product
    const {handleremove} =  props;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-namw">{name}</h4>
            <p>price: {price}</p>
            <p>quantity: {quantity}</p>
            <button onClick={() => handleremove(key)} className="btn-regular">remove</button>
            </div>
        </div>
    );
};

export default Review;