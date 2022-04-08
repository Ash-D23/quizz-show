import React, { useState, useEffect } from 'react'
import SingleQuiz from '../../Components/SingleQuiz/SingleQuiz';
import { db } from '../../firebase';

function AllQuizPage() {

  const [games, setgames] = useState([])

  useEffect(() => {
    (async function(){
      try{
        const categories = db.ref('/Games');
        const snapshot = await categories.once('value');
        setgames(snapshot.val())
      }catch(err){
        console.error(err)
      }
    })()
    
  }, [])

  return (
    <div class="padding--large">
            <h2 class="text--center margin--medium">Play Now</h2>

            <div class="container__flex--center container__flex--wrap">
                { games?.map((item) => <SingleQuiz key={item?.id} game={item} />)}
            </div>
    </div>
  )
}

export default AllQuizPage