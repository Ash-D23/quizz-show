import React from 'react'
import { useQuizGameContext } from '../../Context/QuizGameContext'
import './QuizQuestion.css'

function QuizQuestion() {

  const { quizgamestate: {name, currentquestion, questions, currentselectedoption}, 
  quizgamemethods: {submitanswer, selectanswer},
  quizgamedispatch , 
  timerobj: {time}} = useQuizGameContext()

  const totalquestions = questions.length
  const question = questions.length ? questions[currentquestion]?.question : []
  const options =  questions.length ? questions[currentquestion]?.options : []

  return (
    <div class="container__flex--center question padding--large">
        <div class="question__container border--grey padding--medium">
            <h2 class="text--center margin--medium"> {name} </h2>
            
            <div class="container__flex--spacebetween question__score">
                <p>Question {currentquestion+1}/{totalquestions}</p>
                <p>Time Remaining : {time}</p>
            </div>

            <div class="margin--medium">
                <p>{question}</p>
            </div>

            <div class="container__answer margin--medium">
                {options?.map(({ option, id})=>{
                    return (
                    <div onClick={()=> selectanswer(id)} className={`answer ${currentselectedoption===id ? `answer--selected` : 'answer--plain'}`}>
                        <p>{option}</p>
                    </div> )
                })}
            </div>

            <div class="container__flex--center margin--medium">
                <button onClick={submitanswer} class="btn btn--light">
                    { currentquestion+1 === totalquestions ? 'Finish' : 'Next'}
                </button>
            </div>

        </div>
    </div>
  )
}

export default QuizQuestion