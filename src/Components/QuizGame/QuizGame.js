import React, { useEffect } from 'react';
import { useQuizGameContext } from '../../Context/QuizGameContext';
import QuizQuestion from '../QuizQuestion.js/QuizQuestion';
import QuizResults from '../QuizResults/QuizResults';

const quizgamedata = {id: 23, name: 'Sherlock', questions: 
[
  {id: 1, question: "abcd", options: [{ id: 1, option: "a"}, { id: 2, option: "b"},  { id: 3, option: "c"}]},
  {id: 2, question: "efgh", options: [{ id: 1, option: "e"}, { id: 2, option: "f"},  { id: 3, option: "g"}]}
],
answers: [1, 2]
}

function QuizGame({ gameid }) {

  const { quizgamestate: {showresults, loading}, quizgamedispatch, timerobj: {starttimer} } = useQuizGameContext()

  useEffect(()=>{
    // from gameid set quiz data
    quizgamedispatch({ type: "setquizdata", payload: quizgamedata})
    starttimer()

  }, [])


  if(showresults){
    return <QuizResults />
  }else{
    return loading ? (<p>Loading...</p>) : <QuizQuestion />
  }
}

export default QuizGame