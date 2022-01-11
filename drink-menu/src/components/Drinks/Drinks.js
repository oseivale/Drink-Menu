import DrinkCard from '../DrinkCard/DrinkCard'
import { CardContainer } from './styles';


const Drinks = ({ drinks, getDrink, addToCart }) => {

    return (
        <>   
        <CardContainer>
            {drinks && drinks.map(drink => {
                return (
                        <DrinkCard 
                        key={drink.idDrink}
                        thumbnail={drink.strDrinkThumb} 
                        drinkName={drink.strDrink}
                        id={drink.idDrink}
                        getDrink={getDrink} 
                        drinks={drinks}
                        addToCart={addToCart}
                    />
                )
            })} 
        </CardContainer>
       
        </>
    )

}

export default Drinks;