import React from 'react'
import SingleQuiz from '../../Components/SingleQuiz/SingleQuiz'

function AllQuizPage() {
  return (
    <div class="padding--large">
            <h2 class="text--center margin--medium">Quiz Results</h2>

            <div class="container__flex--center container__flex--wrap">
                <SingleQuiz />
                <SingleQuiz />
                <SingleQuiz />
            </div>
    </div>
  )
}

export default AllQuizPage