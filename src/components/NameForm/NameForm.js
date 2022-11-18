import { useContext, useEffect } from "react";
import { QuestionContext } from '../../contexts';
import { getAnswers, buildTestStateObj } from "../../services";
import { storeTestState } from "../../services";
import { TextField } from '@mui/material';


const NameForm = (props) => {
    const { name , setName } = useContext( QuestionContext );
    const { questions } = useContext( QuestionContext );
    const { submitDate } = useContext( QuestionContext );

    const style = {
        nameInput:{
            minWidth: '200px',
            maxWidth: '500px',
            width: '40vw'
        },
        nameInputText: {
            textAlign: 'center'
        }
    }

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
        <div className='name-form' style={ props.style }>
            <TextField 
                id='name-input' 
                label='Name' 
                inputProps={{ style: style.nameInputText  }}
                defaultValue={name} 
                onChange={_handleNameChange} 
                variant='filled'
                sx={ style.nameInput }
            /> 
        </div>
    );
}

export default NameForm