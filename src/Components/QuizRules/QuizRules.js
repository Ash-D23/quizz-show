import React from 'react';
import './QuizRules.css';

function QuizRules() {
  return (
    <div class="container__flex--center rules padding--large">
        <div class="rules__container border--grey padding--medium">
            <h2 class="text--center"> Rules </h2>

            <ul class="styled-list styled-list--stacked margin--medium">
                <li>1) Lorem ipsum dolor sit amet consectetur, adipisicing elit. </li>
                <li>2) Hic libero culpa numquam, quidem, sequi similique deserunt laudantium eligendi rerum fugiat neque fugit obcaecati voluptate tempore harum quas inventore quam asperiores.</li>
                <li>3) Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            </ul>

            <div class="container__flex--center margin--medium">
                <a href="quizquestions.html"><button class="btn btn--light">Accept</button></a>
            </div>
        </div>
    </div>
  )
}

export default QuizRules