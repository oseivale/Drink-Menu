import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavContainer = styled.nav`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
`

export const NavWrapper = styled.div`
    background-color: purple;
    position: fixed;
    width: 100%;
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 1.9rem;

    &:hover {
        color: #9AD7F5;
        cursor: pointer;
    }
`

export const CartNumber = styled.div`
    background-color: #035CAF;
    border-radius: 100%;
    height: 1.4rem;
    width: 1.4rem;
    position: relative;
    right: 0.5rem;
    bottom: 0.2rem;
    font-size: 0.75rem;
    padding: 0.2rem;
`

export const CartWrapper = styled.div`
    display: flex;
`

export const StyledButton = styled(Button)`
    background-color: transparent;
    border: none;

    &:hover, &:active, &:focus {
        background-color: transparent;
        border: none;
    }
`