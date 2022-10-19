
import { useContext, useEffect, useState } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';
import { buildQuestions } from '../../services/GetQuestions';
import PaginationButtons from '../PaginationButtons/PaginationButtons';
import Question from './Question';


const Questions = ( props ) => {

    // builds the answer object
    const { questions, setQuestions } = useContext( QuestionContext );
    
    useEffect(()=>{
        const questionValues = buildQuestions();
        setQuestions(questionValues);
    }, [])

    // sets up pagination
    const { questionsPerPage } = props;
    const [ currentPage, setCurrentPage ] = useState(0);
    const totalPages = Math.ceil(questions.length / questionsPerPage);

    // gets questions based on pagination
    const getQuestionSet = ( questions, currentPage, totalPages ) => {
        let minQuestion = currentPage * questionsPerPage;
        let maxQuestion = ( currentPage + 1 ) * questionsPerPage

        if ( currentPage >= ( totalPages - 1) ){
            minQuestion =  questions.length % questionsPerPage !== 0
                            ? questions.length - (questions.length % questionsPerPage)
                            : questions.length - questionsPerPage ;
            maxQuestion = ( questions.length );
        }

        const questionSet = questions.slice( minQuestion , maxQuestion);
        return questionSet;
    }

    const navigatePages = ( currentPageChange ) => {
        if ((currentPage + currentPageChange)  <  totalPages  
            && (currentPage + currentPageChange) >= 0 ){
            setCurrentPage(currentPage + currentPageChange)
        }
    }

    return (
        <>
            <ul>
                {
                    getQuestionSet( questions, currentPage, totalPages ).map((question) => 
                        <li key={question.id}>
                            <Question key={question.id} props={question} />
                        </li>
                    )
                }
            </ul>
            <PaginationButtons 
                currentPage={currentPage} 
                totalPages={totalPages} 
                handleClick={navigatePages}
            />
        </>
    );
}

export default Questions;