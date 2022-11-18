import { useContext, useEffect, useState } from 'react';
import { QuestionContext } from '../../contexts';
import { getAnswers, buildTestStateObj } from '../../services';
import { storeTestState } from '../../services';


const AnswerButtons = ( props ) => {

    const style = { 
        button:{
            color: props.theme.palette.primary.main,
            backgroundColor: props.theme.palette.secondary.main,
            margin: '0',
            padding: '3px',
            border: `1px solid ${ props.theme.palette.primary.main }`
        },
        buttonSelected:{
            backgroundColor: props.theme.palette.primary.main,
            color: props.theme.palette.secondary.main,
            margin: '0',
            padding: '3px',
            border: `1px solid ${ props.theme.palette.primary.main }`
        },
        buttonHover:{
            backgroundColor: props.theme.palette.tertiary.main,
            color: props.theme.palette.secondary.main,
            margin: '0',
            padding: '3px',
            border: `1px solid ${ props.theme.palette.primary.main }`
        }
    }

    const { values, id, answer: answerValue } = props;
    const { questions, setQuestions } = useContext( QuestionContext );
    const { name } = useContext( QuestionContext );
    const { submitDate } = useContext( QuestionContext );
    const [ answer, setAnswer ] = useState( answerValue );
    const [ hoverValue, setHoverValue ] = useState( );

    const _handleClick = ( value ) => {
        setAnswer( parseInt(value) );
    }

    const _handleMouseOn = ( value ) => {
        setHoverValue( value );
    }

    const _handleMouseOff = ( ) => {
        setHoverValue( undefined );
    }

    const _getStyle = ( value ) => {

        let butttonStyle = style.button;

        if ( value === answer ){
            butttonStyle =  style.buttonSelected;
        }

        if ( hoverValue === value ){
            butttonStyle =  style.buttonHover;
        } 
        
        return butttonStyle;
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
        <div className='button-group'>
            {
                values.map(( value ) => {
                    const { value: buttonValue, text  } = value;
                    return (
                        <button 
                            key={ buttonValue }
                            style={ _getStyle( buttonValue ) }
                            onClick={ () => _handleClick( buttonValue ) }
                            onMouseEnter = {() => _handleMouseOn( buttonValue )} 
                            onMouseLeave = {() => _handleMouseOff( buttonValue )}
                        >
                            { text }
                        </button>
                    );
                })
            }
        </div>
    );
}


AnswerButtons.defaultProps  = {
    theme: { 
        palette: {
            primary : {
                main : '#1976d2'
            },
            secondary : {
                main : '#FFF'
            },
            tertiary : {
                main : "#BEBEBE"
            }
        }
    }
}

export default AnswerButtons;