import React, { Component } from 'react';
import {Container, ProductTable, Total} from './styles'
import colors from '../../styles/colors'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import productImg from '../../assets/images/placeholder_product.jpg';


export default class Cart extends Component {
    render() {
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
                        <tr>
                            <td>
                                <img src={productImg} alt="product"/>
                            </td>
                            <td>
                                <strong>Como ler notícias</strong>
                                <span>R$ 129,90</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline size={20} color={colors.primary}/>
                                    </button>
                                    <input type="number" readOnly value={2}/>
                                    <button type="button">
                                        <MdAddCircleOutline size={20} color={colors.primary}/>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 258,80</strong>
                            </td>
                            <td>
                                <button type="button">
                                    <MdDelete size={20} color={colors.primary}/>
                                </button>
                            </td>
                        </tr>
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
}
