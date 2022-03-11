import React from 'react';
import './QuizResults.css';

function ResultAnswer({totalquestions, questionnumber, question, quizoptions, answer, selectedanswer}){
    return (
        <div class="result__answer border--grey padding--medium margin-tb--medium">   
            <div class="container__flex--spacebetween question__score">
                <p>Question {questionnumber+1}/{totalquestions}</p>
                <p>Score : {selectedanswer===answer ? (1/totalquestions)*100 : 0}</p>
            </div>

            <div class="margin--medium">
                <p>{question}</p>
            </div>

            <div class="container__answer margin--medium">
                {
                    quizoptions?.map((item, index)=>{
                        let optionstyle = null
                        if(index===selectedanswer){
                            optionstyle = selectedanswer===answer ? "answer--success" : "answer--wrong"
                        }
                        if(index===answer){
                            optionstyle = "answer--success"
                        }
                        return (
                            <div className={`answer ${optionstyle}`}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function QuizResults({answers, selectedanswers, questions, options}) {
    
    const CalculateScoreandShowResults = ()=>{
        let finalscore = 0;
        answers.forEach((val, index)=>{
          finalscore = val === selectedanswers[index] ? finalscore+1 : finalscore
        })
        return (finalscore/totalquestions)*100
    }

    const totalquestions = questions.length

  return (
    <div class="container__flex--center padding--large">
        <div class="container__results">
            
            <div class="results margin--medium">
                <h2 class="text--center margin--medium">Result</h2>
                <p class="text--center margin--medium">Final Score: {CalculateScoreandShowResults()}/100</p>
                <p class="text--center margin--medium result__success">Congratulations !!! You Passed</p>
            </div>

            <div class="result--answers margin-tb--medium">
                <h3 class="text--center margin--large">View Your Answers</h3>

                {questions?.map((item, index)=>{
                    return (
                        <ResultAnswer totalquestions={totalquestions} questionnumber={index} question={item} quizoptions={options[index]} answer={answers[index]} selectedanswer={selectedanswers[index]} />
                    )
                })}
            </div>
 
        </div>
    </div>
  )
}

export default QuizResults