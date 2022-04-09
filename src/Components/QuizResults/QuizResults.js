import React from 'react';
import { useQuizGameContext } from '../../Context/QuizGameContext';
import ResultAnswer from '../ResultAnswer/ResultAnswer';
import './QuizResults.css';

function QuizResults() {

    const { quizgamestate: {name, questions, answers, selectedanswers, score} } = useQuizGameContext()

    const totalquestions = questions.length

  return (
    <div class="container__flex--center padding--large">
        <div class="container__results">
            
            <div class="results margin--medium">
                <h2 class="text--center margin--medium">Result</h2>
                <p class="text--center margin--medium">Final Score: {score}/100</p>
                <p class="text--center margin--medium result__success">Congratulations !!! You Passed</p>
            </div>

            <div class="result--answers margin-tb--medium">
                <h3 class="text--center margin--large">View Your Answers</h3>

                {questions?.map((item, index)=>{
                    console.log(item)
                    return (
                        <ResultAnswer totalquestions={totalquestions} questionnumber={index} question={item.name} quizoptions={item.options} answer={answers[index]} selectedanswer={selectedanswers[index]} />
                    )
                })}
            </div>
 
        </div>
    </div>
  )
}

export default QuizResults