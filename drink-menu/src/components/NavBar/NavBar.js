import { NavContainer, NavWrapper, StyledFontAwesomeIcon, CartNumber, CartWrapper, StyledButton } from './styles';
import CartModal from '../CartModal/CartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../Cart/Cart';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ cart, handleShow, handleClose, show, selectedDrinks }) => {
    return (
        <>
            <CartModal handleClose={handleClose} show={show} cart={cart}>
                <Cart selectedDrinks={selectedDrinks} />
            </CartModal>
        
        <NavWrapper>
           <NavContainer>
                <div>
                    <h3>Welcome to Drink Menu</h3>
                </div> 
                <CartWrapper onClick={handleShow}>
                    <StyledFontAwesomeIcon icon={faShoppingCart} />
                    <CartNumber>{cart}</CartNumber>  
                </CartWrapper>
            </NavContainer> 
        </NavWrapper>
        </>
    )
}

export default NavBar