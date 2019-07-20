import React, { Component } from 'react';
import {Container, ProductTable, Total} from './styles'

import colors from '../../styles/colors'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import productImg from '../../assets/images/placeholder_product.jpg';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, removeFromCart }) {

        return (
            <Container>
                <ProductTable>
                    <thead>
                        <tr>
                            <th/>
                            <th>PRODUTO</th>
                            <th>QTD</th>
                            <th>SUBTOTAL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart.map(product => (
                            <tr>
                            <td>
                                <img src={product.image} alt="product"/>
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline size={20} color={colors.primary}/>
                                    </button>
                                    <input type="number" readOnly value={product.amount}/>
                                    <button type="button">
                                        <MdAddCircleOutline size={20} color={colors.primary}/>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 258,80</strong>
                            </td>
                            <td>
                                <button type="button" onClick={()=> removeFromCart(product.id)}>
                                    <MdDelete size={20} color={colors.primary}/>
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </ProductTable>

                <footer>
                    <button type="button">Finalizar pedido</button>

                    <Total>
                        <span>TOTAL</span>
                        <strong>R$ 1920,28</strong>
                    </Total>
                </footer>
            </Container>
        );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

 const mapDispatchToProps = dispatch =>
   bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
