import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItem = () => {
    const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <div className="cartItem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartItem-format cartItem-format-main'>
                                <img src={e.image || ''} alt={e.name || 'Product Image'} className='carticon-product-icon' />
                                <p>{e.name || 'Unnamed Product'}</p>
                                <p>${e.new_price || 0}</p>
                                <button className='cartItem-quantity'>{cartItem[e.id]}</button>
                                <p>${(e.new_price * cartItem[e.id])}</p>
                                <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove Item" className='remove-icon' />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default CartItem;
