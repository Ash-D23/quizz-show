import React, { useState, useEffect } from 'react';
import SingleQuiz from '../../Components/SingleQuiz/SingleQuiz';
import './SingleCategory.css'

const quizdata = [{id: 1, name: 'Quiz', img: '../Images/quiz.jpg', category: 'Movies'}, {id: 1, name: 'Quiz', img: '../Images/quiz.jpg', category: 'Movies'}, {id: 1, name: 'Quiz', img: '../Images/quiz.jpg', category: 'Movies'} ]

function SingleCategory() {

  const [quizes, setquizes] = useState([])

  useEffect(() => {
     setquizes(quizdata)
    
  }, [])

  return (
    <div class="container--90 margin--large">
      <h2 class="text--center padding--large">Category Name</h2>
      <div class="container__flex--center container__flex--wrap padding--medium">
        {quizes?.map((item)=>{
          return <SingleQuiz quiz={item} />
        })}     
      </div>  
    </div>
  )
}

export default SingleCategory