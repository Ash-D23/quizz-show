import React, { useEffect } from 'react';
import { useQuizGameContext } from '../../Context/QuizGameContext';
import QuizQuestion from '../QuizQuestion.js/QuizQuestion';
import QuizResults from '../QuizResults/QuizResults';
import { db } from '../../firebase';
import QuizRules from '../QuizRules/QuizRules';

const quizgamedata = {  id: 23, name: 'Sherlock', questions: 
[
  {id: 1, question: "abcd", options: [{ id: 1, option: "a"}, { id: 2, option: "b"},  { id: 3, option: "c"}]},
  {id: 2, question: "efgh", options: [{ id: 1, option: "e"}, { id: 2, option: "f"},  { id: 3, option: "g"}]}
],
answers: [1, 2]
}

function QuizGame({ gameid }) {

  const { quizgamestate: {showresults, loading, gamestate}, quizgamedispatch, timerobj: {starttimer} } = useQuizGameContext()

  const loadGame = async () => {
      try{
        const categories = db.ref('/Games/'+gameid);
        const snapshot = await categories.once('value');
        const value = snapshot.val();
        console.log(value) 
        quizgamedispatch({ type: "setquizdata", payload: value})
      }catch(err){
        console.error(err)
      }
  }

  const startGame = () => {
    quizgamedispatch({ type: "gamestate", payload: {gamestate: "game"}})
    starttimer()
  }

  useEffect(()=>{
    loadGame()
  }, [])


  // if(showresults){
  //   return <QuizResults />
  // }else{
  //   return loading ? (<p>Loading...</p>) : <QuizQuestion />
  // }

  switch(gamestate){
    case 'loading':
      return <p>Loading...</p>
    case 'rules':
        return <QuizRules start={startGame} />
    case 'results':
      return <QuizResults />
    case 'game':
      return <QuizQuestion />
  }
}

export default QuizGame