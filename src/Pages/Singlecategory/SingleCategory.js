import React from 'react';
import SingleQuiz from '../../Components/SingleQuiz/SingleQuiz';
import './SingleCategory.css'

function SingleCategory() {
  return (
    <div class="container--90 margin--large">
        <h2 class="text--center padding--large">Category Name</h2>
        <div class="container__flex--center container__flex--wrap padding--medium">
            <SingleQuiz />
            <SingleQuiz />
            <SingleQuiz />        
        </div>  
    </div>
  )
}

export default SingleCategory