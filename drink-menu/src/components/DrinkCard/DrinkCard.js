import { CardWrapper, CardImg, CardButton, CardButtonWrapper, DrinkTitle } from './styles';
import { Link } from "react-router-dom";

const DrinkCard = ({ drinks, thumbnail, drinkName, drinkDescription, id, addToCart }) => {
    // console.log('DRINK', drinks)

    return (
        <CardWrapper>
            <CardImg src={thumbnail} alt="" />
            <DrinkTitle>{drinkName}</DrinkTitle>
            <p>{drinkDescription}</p>
            <CardButtonWrapper>
                <div>
                    <Link to={`/drinks/${id}`}>
                        <CardButton>View Details</CardButton>
                    </Link>
                </div>
                <div>
                    <CardButton onClick={() => addToCart(drinks, id)}>Add to Cart</CardButton>
                </div>
            </CardButtonWrapper>
            
        </CardWrapper>
    )
}

export default DrinkCard;