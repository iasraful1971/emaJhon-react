import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Reviwitem/Review';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart ,setCart] = useCart(products);
    const history =useHistory();
     const handleremove = key =>{
         const newCart = cart.filter(product => product.key !== key);
         setCart(newCart);
         removeFromDb(key);

     }
     const handleplaceorder =()=> {
        clearTheCart();
         setCart([]);
         history.push('/placeorder')
     }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <Review
                    key={product.key}
                        product={product}
                        handleremove={handleremove}

                    ></Review>)
                }
            </div>
            <div className="cart-container">
                        
                <Cart cart ={cart}>
                    <button onClick={handleplaceorder} className="btn-regular">Place Order</button>
                </Cart>
                
            </div>
           
        </div>
    );
};

export default OrderReview;