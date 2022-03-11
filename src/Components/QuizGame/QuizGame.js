import React, { useEffect, useState } from 'react'
import QuizQuestion from '../QuizQuestion.js/QuizQuestion'
import QuizResults from '../QuizResults/QuizResults'

const quizgamedata = {name: 'Sherlock', questions: ['abcd', 'efgh'], answers: [1,2], options: [ ['a','b', 'c'], ['a','b', 'c']]}

function QuizGame() {

  const [showresults, setshowresults] = useState(false)
  const [isloading, setisloading] = useState(true)
  const [quizdata, setquizdata] = useState({})
  const [selected, setselected] = useState(null)
  const [selectedanswers, setselectedanswers] = useState([])

  const [currentquestion, setcurrentquestion] = useState(0)

  const [timerid, settimerid] = useState(null)
  const [time, settime] = useState(10)

  const nextquestion = () => {
    setcurrentquestion(prev => prev+1)
    stoptimer()
    setselectedanswers([...selectedanswers, selected])
    setselected(null)
    starttimer()
  }

  const finish = () => {
    stoptimer()
    setselectedanswers([...selectedanswers, selected])
    setselected(null)
    setshowresults(true)
  }

  useEffect(()=>{
    setquizdata(quizgamedata)
    setisloading(false)
    starttimer()
  }, [])

  useEffect(() => {
    if(time<=0){
      if(currentquestion === quizdata?.questions?.length-1){
        setshowresults(true)
        clearInterval(timerid);
      }else{
        nextquestion()
      }
    }
  }, [time])

  const starttimer = () => {
    const timerid = setInterval(()=>{
      console.log(timerid)
      settime(prev => prev-1)
    }, 1000)
    settimerid(timerid)
  }

  const stoptimer = ()=>{
    clearInterval(timerid);
    settime(10)
  }

  return showresults ? (
    <QuizResults  answers={quizdata.answers} selectedanswers={selectedanswers} questions={quizdata.questions} options={quizdata.options} />
  ) : (
   isloading ? <p>Loading...</p> : (
     <QuizQuestion selected={selected} setselected={setselected} time={time} question={quizdata.questions[currentquestion]} options={quizdata.options[currentquestion]} number={currentquestion} total={quizdata.questions.length} next={nextquestion} finish={finish} />
   )
  )
}

export default QuizGame