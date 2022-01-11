import Modal from 'react-bootstrap/Modal';
import { CardButton } from '../DrinkCard/styles';
import { CartEmptyHeader, ModalLink, LinkContainer, CartHeader } from '../CartModal/styles';
import { Link } from "react-router-dom";


const CartModal = ({ handleClose, show, children, cart }) => {
    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <CartHeader>Your Drink Order</CartHeader>
        {cart > 0 ? 
        (
        <Modal.Body>
            {children}
        </Modal.Body>
        ) : (
        <Modal.Body>
            <CartEmptyHeader>Your Cart is empty</CartEmptyHeader>
            <LinkContainer>
                <ModalLink to="/" onClick={handleClose}>Go Back to Drink Menu to Select a drink</ModalLink>
            </LinkContainer>
            
        </Modal.Body>
        )}
        
        <Modal.Footer>
            <CardButton>Go to Checkout</CardButton>
        </Modal.Footer>
    </Modal>
    )
}

export default CartModal

