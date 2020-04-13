import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardDetailsRows } from './CartDetailsRows';

export class CartDetails extends Component {

    getLinkClases = () => `btn btn-secondary m-1
        ${this.props.cartItems === 0 ? "disabled" : ""}`;

    render() {
        return <div className="m-3">
            <h2 className="text-center">Your Cart</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Produt</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Subtotal</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    <CardDetailsRows cart={ this.props.cart }
                        cartPrice={ this.props.cartPrice }
                        updateQuantity={ this.props.updateQuantity }
                        removeFromCart={ this.props.removeFromCart } />
                </tbody>
            </table>
            <div className="text-center">
                <Link className="btn btn-primary m-1" to="/shop">
                    Continue Shopping
                </Link>
                <Link className={ this.getLinkClases() } to="/shop/checkout">
                    Checkout
                </Link>
            </div>
        </div>
    }
}