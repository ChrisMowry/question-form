import { useState, createContext } from 'react';
import { retrieveTestState } from "../../services/DataPersistence"; 

export const QuestionContext = createContext();

export const QuestionContextProvider = ({children}) => {

    const sessionState = retrieveTestState();
    const nameValue = sessionState ? sessionState.name : '';



    const [ name, setName ] = useState( nameValue );
    const [ submitDate, setSubmitDate ] = useState( new Date() );
    const [ questions, setQuestions ] = useState( [] );

    const values = {
        name,
        setName,
        submitDate,
        setSubmitDate,
        questions,
        setQuestions
    }

    return (<QuestionContext.Provider value={ values }>{children}</QuestionContext.Provider>);

}