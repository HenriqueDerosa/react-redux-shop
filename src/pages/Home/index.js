import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import {formatPrice} from '../../utils/format'

class Home extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const response = await api.get('products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
        }))

        this.setState({
            products: data
        });
    }

    handleAddProduct = (product) => {
        const { addToCart } = this.props;

        addToCart(product);
    }

  render() {
    const {products } = this.state;
    return (
        <ProductList>
            { products.map(product =>
                <li key={product.id}>
                    <img src={product.image}  alt="img product"/>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                    <button type="button" onClick={()=> this.handleAddProduct(product)}>
                        <div>
                        <MdShoppingCart size={16} color="#fff" />
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            )}
        </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
