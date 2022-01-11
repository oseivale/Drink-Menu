import styled from 'styled-components';

export const CartContainer = styled.div`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    h6 {
        display: block;
    }
`

export const CartContent = styled.div`
    margin: 2rem;
    background-color: #EFF1F2;
`

export const CartImg = styled.img`
    width: 25%;
    margin-right: 2rem;
`

export const CartItemContainer = styled.li`
    display: flex;
    margin: 1.5rem;
`

export const CartText = styled.div`
    width: auto;
    text-align: left;

    ul {
        list-style-type: none;
    }
`