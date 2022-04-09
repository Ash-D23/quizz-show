import React, {useEffect, useState} from 'react';
import SingleQuiz from '../../Components/SingleQuiz/SingleQuiz';
import { useAuthContext } from '../../Context/AuthContext/AuthContext';
import { db } from '../../firebase';
import './Dashboard.css';

function Dashboard() {

    const [results, setresults] = useState();

    const { user } = useAuthContext();

  useEffect(() => {
    (async function(){
        try{
          const categories = db.ref('/results/'+user.uid);
          const snapshot = await categories.once('value');
          const value = Object.values(snapshot.val())
          setresults(value)
        }catch(err){
          console.error(err)
        }
      })()    
  }, [])

  const gamesPalyed = results?.length;
  const totalScore = results?.reduce((acc,curr) => acc+curr.score, 0)
  const highScore = results?.reduce((acc,curr) => curr.score > acc ? curr.score : acc, 0)
  
  return (
    <div>
        <h2 class="text--center margin--medium">Dashboard</h2>

        <div class="stat__container padding--large">
            <div class="stat">
                <p>Games Played</p>
                <p>{gamesPalyed}</p>
            </div>

            <div class="stat">
                <p>Total Points</p>
                <p>{totalScore}</p>
            </div>

            <div class="stat">
                <p>Highest Score</p>
                <p>{highScore}</p>
            </div>
        </div>

        <div class="padding--large">
            <h2 class="text--center margin--medium">Quiz Results</h2>

            <div class="container__flex--center container__flex--wrap">
                {results?.map((item) => <SingleQuiz game={item} result={true} />)}
            </div>
        </div>
    </div>
  )
}

export default Dashboard