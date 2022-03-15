import React from 'react'
import QuizGame from '../../Components/QuizGame/QuizGame';
import {QuizGameProvider} from '../../Context/QuizGameContext'

function QuizGamePage() {

  //  get id frm url and pass it
  return (
    <div>
      <QuizGameProvider>
        <QuizGame gameid={23} />
      </QuizGameProvider>
      
    </div>
  )
}

export default QuizGamePage