import React, { Component } from 'react';
import { MdAddShoppingCart, MdShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';
import productImg from '../../assets/images/placeholder_product.jpg';

export default class Home extends Component {
  render() {
    return (
        <ProductList>
            <li>
                <img src={productImg}  alt="img product"/>
                <strong>Como ler notícias</strong>
                <span>R$ 129,90</span>
                <button>
                    <div>
                    <MdShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={productImg}  alt="img product"/>
                <strong>Como ler notícias</strong>
                <span>R$ 129,90</span>
                <button>
                    <div>
                    <MdShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={productImg}  alt="img product"/>
                <strong>Como ler notícias</strong>
                <span>R$ 129,90</span>
                <button>
                    <div>
                    <MdShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={productImg}  alt="img product"/>
                <strong>Como ler notícias</strong>
                <span>R$ 129,90</span>
                <button>
                    <div>
                    <MdShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={productImg}  alt="img product"/>
                <strong>Como ler notícias</strong>
                <span>R$ 129,90</span>
                <button>
                    <div>
                    <MdShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={productImg}  alt="img product"/>
                <strong>Como ler notícias</strong>
                <span>R$ 129,90</span>
                <button>
                    <div>
                    <MdShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
  }
}
