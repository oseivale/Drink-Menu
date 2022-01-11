import './App.css';
import NavBar from './components/NavBar/NavBar'
import { useState, useEffect } from 'react';
import Drinks from './components/Drinks/Drinks'
import { SelectionContainer, LetterBtn } from './components/Drinks/styles'


function App() {
  const [drinks, setDrinks] = useState([]);
  const [cart, setCart] = useState(0)
  const [selectedDrinks, setSelectedDrinks] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setUrlString = (letter) => {
    let url = letter ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}` : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a` 

    return url
  }

  const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  const fetchDrinksByLetter = (letter) => {
    let apiUrlByLetter = setUrlString(letter)
    const response = fetch(apiUrlByLetter)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res
    })
    .then(result => Promise.resolve(result))
    .then(val => {
      setDrinks(val)
      console.log(val)
    })
    .catch( err => console.log(err))

    return response

  }

  const fetchDrinks = () => {
   const response = fetch(apiUrl)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res
    })
    .then(result => Promise.resolve(result))
    .then(val => {
      setDrinks(val)
      console.log(val)
    })
    .catch( err => console.log(err))

    return response
  }


  useEffect(() => {
    fetchDrinks()
  }, [])

  // console.log(drinks.drinks)

  const letterMenu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

  const addToCart = (drinks1, id) => {
  
    const selectedDrink = drinks1.filter(drink => drink.idDrink === id)
    
    setSelectedDrinks([...selectedDrinks, selectedDrink[0]])

    setCart(cart + 1)

    return selectedDrinks
  }

  console.log('DRINK ID', selectedDrinks)

  return (
    <div className="App">
      <NavBar cart={cart} selectedDrinks={selectedDrinks} handleShow={handleShow} handleClose={handleClose} show={show} />
       <SelectionContainer>
            {letterMenu.map(letter => {
                return (
                <LetterBtn onClick={() => fetchDrinksByLetter(letter)}><li>{letter}</li></LetterBtn>
                )
            })}
        </SelectionContainer>
     
     <Drinks drinks={drinks.drinks} addToCart={addToCart} />
    </div>
  );
}

export default App;
