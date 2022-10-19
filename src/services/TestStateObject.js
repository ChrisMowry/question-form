
export const buildTestStateObj = ( name, date, answers ) => {
    return {
        name: name,
        date: date,
        answers: answers
    }
}

export const getAnswers = ( questions ) => {
    const answers = questions.map(question => {
        const { id, answer} = question;
        return {
            id: id,
            answer: answer
        }
    });

    return answers.filter((answer) => answer.answer !== undefined);
}