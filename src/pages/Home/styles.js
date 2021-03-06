import styled from 'styled-components';
import { darken } from 'polished'

import colors from '../../styles/colors'

export const ProductList = styled.div`
    list-style: none;
    color: #000;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 280px;
            transition: all 0.4s;
            &:hover {
                transform: scale(1.04) rotate(2deg);
            }
        }

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background:${colors.primary};
            color: #fff;

            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;

            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.05, colors.primary)}
            }

            div {
                display:flex;
                align-items: center;
                padding: 12px;
                background: rgba(0,0,0,0.1);
                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }

        }

    }

`;
