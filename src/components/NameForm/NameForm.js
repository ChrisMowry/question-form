import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';
import { getAnswers, buildTestStateObj } from "../../services/TestStateObject";
import { storeTestState, retrieveTestState } from "../../services/DataPersistence";


const NameForm = () => {
    const { name , setName } = useContext( QuestionContext );
    const { questions } = useContext( QuestionContext );
    const { submitDate } = useContext( QuestionContext );

    const _handleNameChange = (event) => {
        const inputValue = event.target.value;
        setName( inputValue );
    }

    useEffect(() => {
        // logs changes to local storage
        const answers = getAnswers( questions );
        const testState = buildTestStateObj( name, submitDate, answers );
        storeTestState( testState );
    }, [ name ] );

    return (
        <div className='name-form'>
            <h1>{name}</h1>
            <form>
                <label htmlFor='name-input'>Name:</label>
                <input id='name-input' name='name' type='text' onChange={_handleNameChange} value={name} />
                <Link to={'/questions'}>Next</Link>
            </form>
        </div>
    );
}

export default NameForm