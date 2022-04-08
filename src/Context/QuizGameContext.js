import { createContext, useContext, useReducer, useEffect } from "react";
import useTimer from "../hooks/timer"
const QuizGameContext = createContext()

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
            return {...state, id: action.payload.id, name: action.payload.name, questions: action.payload.questions, 
                answers: action.payload.answers}
        case "selecttanswer":
                return { ...state, currentselectedoption: action.payload }
        case "submitanswer":
                return { ...state, selectedanswers: [...state.selectedanswers, state.currentselectedoption], 
                    currentselectedoption: null, currentquestion: state.currentquestion+1}
        case "submitanswerandfinish":
            return { ...state, selectedanswers: [...state.selectedanswers, state.currentselectedoption], 
                currentselectedoption: null, showresults: true}
        case "gamestate":
            return { ...state, gamestate: action.payload.gamestate}
        case "default":
            return state
    }
}

const QuizGameProvider = ({children}) => {

    const [ quizgamestate, quizgamedispatch ] = useReducer(quizgamereducerfn, quizgameinitialstate)

    const {time, timerid, starttimer, stoptimer, resettimer} = useTimer(10)

    useEffect(()=>{
        if(time<=0){
          submitanswer()
        }
    }, [time])

    const submitanswer = ()=> {
        if(quizgamestate.currentquestion === quizgamestate.questions.length-1){
            quizgamedispatch({ type: 'submitanswerandfinish'})
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