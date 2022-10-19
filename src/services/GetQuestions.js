import questionsJSON from '../assets/questions.json';
import { retrieveTestState } from '../services/DataPersistence'

const getQuestionData = () => {
    return questionsJSON;
}

const getQuestions = () => {
    const { questions } = questionsJSON;
    return questions;
}

const getQuestionTypes = ( typeId ) => {
    const questionJSON = getQuestionData();
    const { types } = questionJSON;
    const { sets }  = types.find((type) => type.id === typeId);
    return sets
}

const getQuestionTypeSetValues = ( typeId, setId ) => {
    const type = getQuestionTypes( typeId );
    const { values } = type.find((set) => set.id === setId);
    return values;
}

export const buildQuestions = () => {
    const testState = retrieveTestState();
    const questions = getQuestions();
    
    const formattedQuestions = questions.map((question) => { 
        const { id, text, weight, group, type, set } = question;
        const updatedQuestion = { 
            id: id,
            question: text,
            weight:  weight,
            group: group,
            values: getQuestionTypeSetValues( type, set),
            answer: getQuestionAnswer( id, testState.answers )
        }
        return updatedQuestion;
    });

    return formattedQuestions;
}

const getQuestionAnswer = ( questionId, answers ) => {
    if( answers ) {
        const index = answers.findIndex((answer) => answer.id === questionId );
        return answers[index] ? answers[index].answer : undefined;
    }
    return undefined;
}

export const getGroup = ( groupId ) => {
    const { groups } = questionsJSON;
    return groups.find(group => group.id === groupId);
}
