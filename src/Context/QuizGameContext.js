import { createContext, useContext, useReducer, useEffect } from "react";
import useTimer from "../hooks/timer"
import { db } from '../firebase';
import { useAuthContext } from "./AuthContext/AuthContext";

const QuizGameContext = createContext();

const useQuizGameContext = () => useContext(QuizGameContext)

const quizgameinitialstate = {
    id: null,
    name: null,
    questions: [],
    answers: [],
    loading: false,
    currentquestion: 0,
    currentselectedoption: null,
    selectedanswers: [],
    showresults: false, 
    gamestate: "loading"
}

const quizgamereducerfn = (state, action)=> {
    switch (action.type){
        case "setquizdata":
            return {...state, id: action.payload.id, name: action.payload.name, questions: action.payload.data.questions, 
                answers: action.payload.data.answers, gamestate: "rules"}
        case "selecttanswer":
                return { ...state, currentselectedoption: action.payload }
        case "submitanswer":
                return { ...state, selectedanswers: [...state.selectedanswers, state.currentselectedoption], 
                    currentselectedoption: null, currentquestion: state.currentquestion+1}
        case "submitanswerandfinish":
            return { ...state, selectedanswers: action.payload.selectedanswers, 
                currentselectedoption: null, showresults: true, gamestate: 'results', score: action.payload.score}
        case "gamestate":
            return { ...state, gamestate: action.payload.gamestate}
        case "default":
            return state
    }
}

const QuizGameProvider = ({children}) => {

    const [ quizgamestate, quizgamedispatch ] = useReducer(quizgamereducerfn, quizgameinitialstate)

    const {time, starttimer, stoptimer, resettimer} = useTimer(10)

    const { user } = useAuthContext()

    useEffect(()=>{
        if(time<=0){
          submitanswer()
        }
    }, [time])

    const CalculateScoreandShowResults = async ()=>{
        quizgamedispatch({ type: 'gamestate', payload: { gamestate: 'loading'} })
        const { answers } = quizgamestate
        const finalselectedanswers = [...quizgamestate.selectedanswers, quizgamestate.currentselectedoption]
        let finalscore = 0;
        answers.forEach((val, index)=>{
          finalscore = val === finalselectedanswers[index] ? finalscore+1 : finalscore
        })
        const totalquestions = quizgamestate.questions.length
        finalscore = (finalscore/totalquestions)*100
        try{
            const resultref = db.ref(`/results/`+user.uid);

            const item = {
                uid: user.uid,
                score: finalscore,
                name: quizgamestate.name,
                id: quizgamestate.id
            }

            await resultref.push().set(item)

            quizgamedispatch({type:'submitanswerandfinish', 
            payload: { selectedanswers: finalselectedanswers, score: finalscore}})
        }catch(err){
            console.error(err)
        }
    }

    const submitanswer = ()=> {
        if(quizgamestate.currentquestion === quizgamestate.questions.length-1){
            CalculateScoreandShowResults()
            stoptimer()
        }else{
            quizgamedispatch({ type: 'submitanswer'})
            resettimer()
            starttimer()
        }
    }

    const selectanswer = (selectedanswer)=>{
        quizgamedispatch({ type: 'selecttanswer', payload: selectedanswer})
    }

    return <QuizGameContext.Provider value={{ quizgamestate, quizgamemethods: {
        submitanswer, selectanswer
    }, quizgamedispatch, 
    timerobj: { time, starttimer, stoptimer, resettimer}}}>
        {children}
    </QuizGameContext.Provider>
}

export { QuizGameProvider, useQuizGameContext}