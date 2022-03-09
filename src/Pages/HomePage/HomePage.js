import React from 'react';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import './HomePage.css'

function HomePage() {
  return (
    <>
      <div class="container--50 container__flex--center padding--medium ">
        <div class="about__description padding--medium">
            <h2 class="text--light text--center margin-bottom--large">Welcome to QuizzShow</h2>
            <p class='text--large text--center margin-bottom--medium'> 
                Let's Begin the show
            </p>
            <div class="container__flex--center margin-tb--large">
                <a href="Pages/quizcategory.html"><button class="btn btn--outline">Explore</button></a>
            </div>
        </div>
      </div>
      <div class="category--container quiz__category">
        <div class="container__flex--center margin-bottom--large padding--medium">
            <h2>Category</h2>
        </div>
        <div class="container__flex--center container__flex--wrap">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
        <div class="container__flex--center margin--medium">
            <a href="Pages/quizcategory.html"><button class="btn btn--outline">View All</button></a>
        </div>
      </div>
    </>
  )
}

export default HomePage