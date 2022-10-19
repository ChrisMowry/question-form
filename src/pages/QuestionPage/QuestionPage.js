import Questions from '../../components/Questions/Questions';
import { QUESTIONS_PER_PAGE } from '../../constants/constants';

const QuestionPage = () => {
    return(
        <Questions questionsPerPage={ QUESTIONS_PER_PAGE } />
    );
}

export default QuestionPage;