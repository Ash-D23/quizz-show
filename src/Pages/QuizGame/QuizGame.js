import React from 'react'
import QuizGame2 from '../../Components/QuizGame/QuizGame2';
import {QuizGameProvider} from '../../Context/QuizGameContext'

function QuizGame() {

  //  get id frm url and pass it


  return (
    <div>
      <QuizGameProvider>
        <QuizGame2 gameid={23} />
      </QuizGameProvider>
      
    </div>
  )
}

export default QuizGame