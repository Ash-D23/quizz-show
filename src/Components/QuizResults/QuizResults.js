import React from 'react';
import './QuizResults.css';

function QuizResults() {
  return (
    <div class="container__flex--center padding--large">
        <div class="container__results">
            
            <div class="results margin--medium">
                <h2 class="text--center margin--medium">Result</h2>
                <p class="text--center margin--medium">Final Score: 50/100</p>
                <p class="text--center margin--medium result__success">Congratulations !!! You Passed</p>
            </div>

            <div class="result--answers margin-tb--medium">
                <h3 class="text--center margin--large">View Your Answers</h3>

                <div class="result__answer border--grey padding--medium margin-tb--medium">
                       
                        <div class="container__flex--spacebetween question__score">
                            <p>Question 1/5</p>
                            <p>Score : 0</p>
                        </div>
            
                        <div class="margin--medium">
                            <p>What does Holmes take as proof that Watson sees things but does not observe them?</p>
                        </div>
            
                        <div class="container__answer margin--medium">
                            <div class="answer">
                                <p>Watson cannot recall color of Mary's eye</p>
                            </div>
                            <div class="answer answer--success">
                                <p>Watson cannot recall color of Mary's eye</p>
                            </div>
                            <div class="answer">
                                <p>Watson cannot recall color of Mary's eye</p>
                            </div>
                        </div>
                </div>
            
                <div class="result__answer border--grey padding--medium margin-tb--medium">
                        
                        <div class="container__flex--spacebetween question__score">
                            <p>Question 1/5</p>
                            <p>Score : 0</p>
                        </div>
            
                        <div class="margin--medium">
                            <p>What does Holmes take as proof that Watson sees things but does not observe them?</p>
                        </div>
            
                        <div class="container__answer margin--medium">
                            <div class="answer">
                                <p>Watson cannot recall color of Mary's eye</p>
                            </div>
                            <div class="answer">
                                <p>Watson cannot recall color of Mary's eye</p>
                            </div>
                            <div class="answer answer--wrong">
                                <p>Watson cannot recall color of Mary's eye</p>
                            </div>
                        </div>
            
                </div>
            </div>
 
        </div>
    </div>
  )
}

export default QuizResults