import React from 'react'
import './QuizQuestion.css'

function QuizQuestion() {
  return (
    <div class="container__flex--center question padding--large">
        <div class="question__container border--grey padding--medium">
            <h2 class="text--center margin--medium"> Quiz Name </h2>
            
            <div class="container__flex--spacebetween question__score">
                <p>Question 1/5</p>
                <p>Score : 0</p>
            </div>

            <div class="margin--medium">
                <p>What does Holmes take as proof that Watson sees things but does not observe them?</p>
            </div>

            <div class="container__answer margin--medium">
                <div class="answer answer--plain">
                    <p>Watson cannot recall color of Mary's eye</p>
                </div>
                <div class="answer answer--success">
                    <p>Watson cannot recall color of Mary's eye</p>
                </div>
                <div class="answer answer--wrong">
                    <p>Watson cannot recall color of Mary's eye</p>
                </div>
            </div>

            <div class="container__flex--center margin--medium">
                <a href="quizresults.html"><button class="btn btn--light">Next</button></a>
            </div>

        </div>
    </div>
  )
}

export default QuizQuestion