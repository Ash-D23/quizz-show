import React from 'react'
import { useParams } from 'react-router-dom';
import QuizGame from '../../Components/QuizGame/QuizGame';
import {QuizGameProvider} from '../../Context/QuizGameContext'

function QuizGamePage() {

  //  get id frm url and pass it

  const { id } = useParams()

  return (
    <div>
      <QuizGameProvider>
        <QuizGame gameid={id} />
      </QuizGameProvider>
      
    </div>
  )
}

export default QuizGamePage