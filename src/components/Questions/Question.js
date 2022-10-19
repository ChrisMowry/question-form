
import AnswerButtons from './AnswerButtons';

const Question = (props) => {

    const { props: {question, id, values, answer} } = props;
    return(
        <div className='question'>
            <p>{question}</p>
            <AnswerButtons id={id} values={values} answer={answer} />
        </div>
    );
}

export default Question;