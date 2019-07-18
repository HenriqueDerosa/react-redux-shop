import React, { Component } from 'react';
import {Container, Total} from './styles'
import { ProductList } from '../Home/styles';

export default class Cart extends Component {
    render() {
        return (
            <Container>
                <ProductList>
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
                            <td>T</td>
                            <td>
                                <strong>Como ler notícias</strong>
                                <span>R$ 129,90</span>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </ProductList>

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
