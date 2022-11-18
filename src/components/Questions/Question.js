
import AnswerButtons from './AnswerButtons';

const Question = (props) => {

    const style = {
        questionBox: {
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            alignItems: 'center',
            width: '100%'
        }, 
        answers: {

        },
        question: {
            marginTop: '0'
        }

    }

    const { props: {question, id, values, answer} } = props;
    return(
        <div className='question' style={ style.questionBox }>
            <p style={ style.question } >{question}</p>
            <AnswerButtons id={id} values={values} answer={ answer } style={ style.answers }/>
        </div>
    );
}

export default Question;