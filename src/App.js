import { useState, useEffect } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/img/cat1.png", matched: false},
  {"src": "/img/cat2.png", matched: false},
  {"src": "/img/cat3.png", matched: false},
  {"src": "/img/cat4.png", matched: false},
  {"src": "/img/cat5.png", matched: false},
  {"src": "/img/cat6.png", matched: false}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const [disabled, setDisabled] = useState(false)
  
  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random()-0.5)
      .map((card) => ( { ...card, id: Math.random() } ))

      setCards(shuffledCards)
      setTurns(0)
  }
  // Handle A Choice
  const handleChoice = (cardChosen) => {
    choiceOne ? setChoiceTwo(cardChosen) : setChoiceOne(cardChosen)
  }
  
  //compare two selected cards
  useEffect(() => {
    
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        
        setTimeout(() => resetTurn(), 1000) 
      }
    }
  }, [choiceOne, choiceTwo])

  
  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            flipped={ card === choiceOne || card === choiceTwo || card.matched }
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
