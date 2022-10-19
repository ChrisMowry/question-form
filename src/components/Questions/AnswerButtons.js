import { useContext, useEffect, useState } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';
import { getAnswers, buildTestStateObj } from '../../services/TestStateObject';
import { storeTestState } from '../../services/DataPersistence';
import { getGroupScores, getUnansweredGroupCount, getTotalScore, getTotalUnanswered } from '../../services/GetScores';
import { getGroup } from '../../services/GetQuestions';


const AnswerButtons = ( props ) => {
    const { values, id, answer: answerValue } = props;
    const { questions, setQuestions } = useContext( QuestionContext );
    const { name } = useContext( QuestionContext );
    const { submitDate } = useContext( QuestionContext );
    const [ answer, setAnswer ] = useState( answerValue );

    const _handleChange = ( event ) => {
        setAnswer(parseInt(event.target.value));
    }

    useEffect(()=>{
        // stores state of button
        const tempQuestions = questions;
        const index = tempQuestions.findIndex((question) => question.id === id);
        tempQuestions[index].answer = answer;
        setQuestions(tempQuestions);

        // logs changes to local storage
        const answers = getAnswers( questions );
        const testState = buildTestStateObj( name, submitDate, answers );
        storeTestState( testState );

    },[ answer ]);

    return (
        <>
            {
                values.map(( value ) => {
                    const { value: buttonValue, text  } = value;
                    return (
                        <label key={ buttonValue }>
                            <input 
                                type="radio" 
                                value={ buttonValue } 
                                name={ `answer-${id}` } 
                                checked={ buttonValue === answer }
                                onChange={ _handleChange }
                            />
                            <span>{ text }</span>
                        </label>
                    );
                })
            }
        </>
    );
}

export default AnswerButtons;