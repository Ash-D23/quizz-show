import React from 'react'
import './QuizQuestion.css'

function QuizQuestion({ selected, setselected, time, question, options, number, total, next, finish}) {
  return (
    <div class="container__flex--center question padding--large">
        <div class="question__container border--grey padding--medium">
            <h2 class="text--center margin--medium"> Quiz Name </h2>
            
            <div class="container__flex--spacebetween question__score">
                <p>Question {number+1}/{total}</p>
                <p>Time Remaining : {time}s</p>
            </div>

            <div class="margin--medium">
                <p>{question}</p>
            </div>

            <div class="container__answer margin--medium">
                {options?.map((item, index)=>{
                    return (
                    <div onClick={()=> setselected(index)} className={`answer ${selected===index ? `answer--selected` : 'answer--plain'}`}>
                        <p>{item}</p>
                    </div> )
                })}
            </div>

            <div class="container__flex--center margin--medium">
                {number===total-1 ? <button onClick={finish} class="btn btn--light">Finish</button> : <button onClick={next} class="btn btn--light">Next</button> }
            </div>

        </div>
    </div>
  )
}

export default QuizQuestion