import React from 'react';
import './SingleCategory.css'

function SingleCategory() {
  return (
    <div class="container--90 margin--large">
        <h2 class="text--center padding--large">Category Name</h2>
        <div class="container__flex--center container__flex--wrap padding--medium">
            <div class="card margin--medium">
                <div class="card__image--container">
                    <img class="card__image " src="../Images/quiz.jpg" />
                </div>
                <div class="card__body background--light padding--medium">
                    
                    <div class="container__flex--spacebetween">
                        <h2 class="card__title text--large">Quiz Name</h2>
                        <a href="quizrules.html"><button class="btn btn--red">Play Now</button></a>
                    </div>

                </div> 
            </div>     
            <div class="card margin--medium">
                <div class="card__image--container">
                    <img class="card__image " src="../Images/quiz.jpg" />
                </div>
                <div class="card__body background--light padding--medium">
                    
                    <div class="container__flex--spacebetween">
                        <h2 class="card__title text--large">Quiz Name</h2>
                        <a href="quizrules.html"><button class="btn btn--red">Play Now</button></a>
                    </div>

                </div> 
            </div>    
            <div class="card margin--medium">
                <div class="card__image--container">
                    <img class="card__image " src="../Images/quiz.jpg" />
                </div>
                <div class="card__body background--light padding--medium">
                    
                    <div class="container__flex--spacebetween">
                        <h2 class="card__title text--large">Quiz Name</h2>
                        <a href="quizrules.html"><button class="btn btn--red">Play Now</button></a>
                    </div>

                </div> 
            </div>         
        </div>  
    </div>
  )
}

export default SingleCategory