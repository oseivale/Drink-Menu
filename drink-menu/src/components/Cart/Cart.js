import { CartContainer, CartImg, CartItemContainer, CartText } from './styles'

const Cart = ({ selectedDrinks }) => {
    return (
        <div>
            <CartContainer>
                <ul>
                    {selectedDrinks.map( item => {
                        return (
                            <CartItemContainer>
                                <CartImg src={item.strDrinkThumb} />
                                <CartText>
                                    <ul>
                                        <li><strong>Drink name:</strong> {item.strDrink}</li>
                                        <li><strong>Price:</strong> $7.99</li>
                                        <li><strong>Quantity:</strong> 1</li>
                                    </ul>
                                </CartText>
                            </CartItemContainer>
                        )
                    })}
                </ul>
            </CartContainer>
            
        </div>
    )
}

export default Cart