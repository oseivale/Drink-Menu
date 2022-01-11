import { CardWrapper, CardImg, CardButton, CardButtonWrapper } from './styles';
import { Link } from "react-router-dom";

const DrinkCard = ({ drinks, thumbnail, drinkName, id, addToCart }) => {
    // console.log('DRINK', drinks)

    return (
        <CardWrapper>
            <CardImg src={thumbnail} alt="" />
            <h4>{drinkName}</h4>
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