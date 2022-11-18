import { flexbox } from '@mui/system';
import Questions from '../../components/Questions/Questions';
import { QUESTIONS_PER_PAGE } from '../../constants/constants';



const QuestionPage = () => {
    const style = {
        questions : {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //height: '75vh'
        }
    }

    return(
        <Questions style={ style.questions } questionsPerPage={ QUESTIONS_PER_PAGE } />
    );
}

export default QuestionPage;