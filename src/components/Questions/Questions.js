
import { useContext, useEffect, useState } from 'react';
import { QuestionContext } from '../../contexts';
import { buildQuestions } from '../../services';
import { useNavigate, useParams } from 'react-router-dom'
import PaginationButtons from '../PaginationButtons/PaginationButtons';
import Question from './Question';


const Questions = ( props ) => {

    const style = {
        questionsContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            justifySelf: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            // left: '0',
            // right: '0',
            // margin: '0',
            // padding: '0',
            // height: '75vh'
        },
        list: {
            listStyleType: 'none',
            margin: '0',
            padding: '0'
        },
        listItem: {
            display: 'flex',

            //justifyContent: 'center'
        },
        listItemEven: {
            display: 'flex',
            backgroundColor: '#C5C5C5'
        }
    }

    // used to navigate to a different question page in the url
    const navigate = useNavigate();
    // gets the current question page from the url
    const { page: pageParam } = useParams();
    
    // builds the answer object
    const { questions, setQuestions } = useContext( QuestionContext );
    
    // sets the questions context to the questions JSON.
    useEffect(()=>{
        const questionValues = buildQuestions();
        setQuestions(questionValues);
    }, [])

    // sets up pagination
    const { questionsPerPage } = props;
    const [ currentPage, setCurrentPage ] = useState( parseInt(pageParam) - 1 );
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

    // handles navigating to each question page
    const navigatePages = ( currentPageChange ) => {
        if ((currentPage + currentPageChange)  <  totalPages  
            && (currentPage + currentPageChange) >= 0 ){
                const newPage = currentPage + currentPageChange;
                navigate(`/questions/page/${newPage + 1}`)
                setCurrentPage(newPage)
        }
    }


    return (
        <div className='questions' style={ style.questionsContainer }>
            <ul style={ style.list }>
                {
                    getQuestionSet( questions, currentPage, totalPages ).map((question, index) => 
                        <li key={question.id} style={ index % 2 ? style.listItemEven : style.listItem }>
                            <Question key={question.id} props={question} />
                        </li>
                    )
                }
            </ul>
            {/* <PaginationButtons 
                currentPage={currentPage} 
                totalPages={totalPages} 
                handleClick={navigatePages}
            /> */}
        </div>
    );
}

export default Questions;