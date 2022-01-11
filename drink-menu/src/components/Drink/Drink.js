import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import { 
    DrinkSection, 
    FeatureImg, 
    TextWrapper, 
    Button, 
    ButtonContainer 
} from './styles';
import DrinkModal from '../DrinkModal/DrinkModal'
import { Link } from "react-router-dom";

const Drink = () => {
    const [drink, setDrink] = useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let params = useParams();   

    const singleDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.drinkId}`
  

    useEffect(() => {
            const fetchDrink = () => {
                const response = fetch(singleDrink)
                    .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    throw res
                    })
                    .then(result => Promise.resolve(result))
                    .then(val => {
                    setDrink(val)
                    console.log(val)
                    })
                    .catch( err => console.log(err))
            
                return response
              }
    
        fetchDrink()

    }, [singleDrink])

    // console.log('INGREDIENT', drink.drinks[0].strIngredient1)

    // const getIngredients = () => {
        
    //     for(let i = 0; i < 15; i++){
    //         let ingredient = `${drink.drinks[0].strIngredient}${i+1}`
    //         if(ingredient !== null){
    //             return (
    //                 <li>{ingredient}</li>
    //             )
    //         }

    //     }
    // }
const ytLink = drink.drinks ? drink.drinks[0].strVideo : null

const vidId = ytLink && ytLink.split('=')[1].split('&')[0]

// const ytLink = drink.drinks[0].strVideo

// console.log('PARAMS', ytLink.split('=')[1].split('&')[0])

console.log('drinks', drink.drinks && drink.drinks[0].strVideo)

  return (
            <DrinkSection>
                <DrinkModal 
                    show={show}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    //vidSrc={drink.drinks[0] &&  drink.drinks[0].strVideo}
                    emdedId={ytLink ? vidId : ''}
                />
                {drink.drinks ? (
                    <>
                    <FeatureImg src={drink.drinks && drink.drinks[0].strDrinkThumb} />
                    <TextWrapper>
                        <h1>{drink.drinks[0] && drink.drinks[0].strDrink}</h1>
                        <h4>{`Enjoy this ${drink.drinks[0] && drink.drinks[0].strAlcoholic} drink in a ${drink.drinks[0] && drink.drinks[0].strGlass}`}.</h4>
                     <strong>Ingredients:</strong>
                        <ul>
                            <li>{drink.drinks[0].strMeasure1} {drink.drinks[0].strIngredient1}</li>
                            <li>{drink.drinks[0].strMeasure2} {drink.drinks[0].strIngredient2}</li>
                            {drink.drinks[0].strIngredient3 && (
                            <li>{drink.drinks[0].strMeasure3} {drink.drinks[0].strIngredient3}</li> 
                            )}
                            {drink.drinks[0].strIngredient4 && (
                               <li>{drink.drinks[0].strMeasure4} {drink.drinks[0].strIngredient4}</li> 
                            )}
                            {drink.drinks[0].strIngredient5 && (
                               <li>{drink.drinks[0].strMeasure5} {drink.drinks[0].strIngredient5}</li> 
                            )}
                            {drink.drinks[0].strIngredient6 && (
                               <li>{drink.drinks[0].strIngredient6}</li> 
                            )}
                            
                        </ul>
                        <p><strong>Directions: </strong>{drink.drinks[0].strInstructions}</p>
                        <ButtonContainer>
                        <Link to={`/`}>
                            <Button>
                            Back to Drink Menu
                            </Button>
                        </Link>
                        {drink.drinks[0].strVideo && (
                            <Button onClick={handleShow}>
                            Watch How-To Video
                            </Button>
                        )}  
                        </ButtonContainer>
                        
                    </TextWrapper>
                   
                </>
                ) : (
                    <div>No Drink!</div>
                )}
                
            </DrinkSection>
        ) 
    }


export default Drink