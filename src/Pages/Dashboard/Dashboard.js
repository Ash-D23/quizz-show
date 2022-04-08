import React from 'react';
import SingleQuiz from '../../Components/SingleQuiz/SingleQuiz';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
        <h2 class="text--center margin--medium">Dashboard</h2>

        <div class="stat__container padding--large">
            <div class="stat">
                <p>Games Played</p>
                <p>5</p>
            </div>

            <div class="stat">
                <p>Total Points</p>
                <p>5</p>
            </div>

            <div class="stat">
                <p>Highest Score</p>
                <p>5</p>
            </div>
        </div>

        <div class="padding--large">
            <h2 class="text--center margin--medium">Quiz Results</h2>

            <div class="container__flex--center container__flex--wrap">
                <SingleQuiz result={true} />
            </div>
        </div>
    </div>
  )
}

export default Dashboard