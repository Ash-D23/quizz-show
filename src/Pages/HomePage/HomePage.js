import React, {useState, useEffect} from 'react';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import './HomePage.css'

function HomePage() {
  const [category, setcategory] = useState([])

  useEffect(() => {
    (async function(){
      try{
        const categories = db.ref('/Categories');
        const snapshot = await categories.once('value');
        setcategory(snapshot.val())
      }catch(err){
        console.error(err)
      }
    })()
    
  }, [])

  console.log(category)
  
  return (
    <>
      <div class="container--50 container__flex--center padding--medium ">
        <div class="about__description padding--medium">
            <h2 class="text--light text--center margin-bottom--large">Welcome to QuizzShow</h2>
            <p class='text--large text--center margin-bottom--medium'> 
                Let's Begin the show
            </p>
            <div class="container__flex--center margin-tb--large">
                <Link to="/category"><button class="btn btn--outline">Explore</button></Link>
            </div>
        </div>
      </div>
      <div class="category--container quiz__category">
        <div class="container__flex--center margin-bottom--large padding--medium">
            <h2>Category</h2>
        </div>
        <div class="container__flex--center container__flex--wrap">
            {category?.map((item)=>{
              return <CategoryCard key={item.id} category={item} />
            })}
        </div>
        <div class="container__flex--center margin--medium">
            <Link to="/category"><button class="btn btn--outline">View All</button></Link>
        </div>
      </div>
    </>
  )
}

export default HomePage