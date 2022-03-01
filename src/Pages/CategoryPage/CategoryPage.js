import React from 'react'

function CategoryPage() {
  return (
    <div class="category--container quiz__category">
        <div class="container__flex--center margin-bottom--large padding--medium">
            <h2>Category</h2>
        </div>
        <div class="container__flex--center container__flex--wrap">
            <div class="category--card margin--medium">
                <img src="Images/quiz.jpg" />
                <h3 class="category--title">Category</h3>
            </div>
            <div class="category--card margin--medium">
                <img src="Images/quiz.jpg" />
                <h3 class="category--title">Category</h3>
            </div>
            <div class="category--card margin--medium">
                <img src="Images/quiz.jpg" />
                <h3 class="category--title">Category</h3>
            </div>
            <div class="category--card margin--medium">
                <img src="Images/quiz.jpg" />
                <h3 class="category--title">Category</h3>
            </div>
        </div>
    </div>
  )
}

export default CategoryPage