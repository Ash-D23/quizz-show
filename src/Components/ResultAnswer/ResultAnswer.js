

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
                    quizoptions?.map(({ option, id})=>{
                        let optionstyle = null
                        if(id===selectedanswer){
                            optionstyle = selectedanswer===answer ? "answer--success" : "answer--wrong"
                        }
                        if(id===answer){
                            optionstyle = "answer--success"
                        }
                        return (
                            <div className={`answer ${optionstyle}`}>
                                <p>{option}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ResultAnswer