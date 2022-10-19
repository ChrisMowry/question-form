import { getGroup } from './GetQuestions';

const groupBy = ( questions ) => {

    let group = questions.reduce((accumulator, question) => {
        accumulator[question.group] = [...accumulator[question.group] || [], question];
        return accumulator;
    }, {});
    
    return group;
}


export const getGroupScores = ( questions ) => {
    const groups = groupBy( questions );
    const keys = Object.keys( groups );

    let scoreArray = [];
    const scores = keys.map(( key ) => {

        // gets score sum
        const sum = groups[ key ].reduce(( accumulator, question ) => {
                        const answer = question.answer != undefined ? question.answer : 0;
                        return accumulator + answer;
                    }, 0);
    
        // gets the category based on the score
        const { name, categories } = getGroup( parseInt(key) );
        const category = categories.find( (category) => {
            const { min, max = 9999999999999999.99 } = category;
            return parseFloat(sum) >= parseFloat(min) && parseFloat(sum) <= parseFloat(max);
        });

        // gets score sum
        const maxSum = groups[ key ].reduce(( accumulator, question ) => {
            const maxValue = Math.max( ...question.values.map((value) => value.value) )
            return accumulator + maxValue;
        }, 0);        

        scoreArray.push(
            { 
                group: key,
                name: name,
                score: sum,
                category: category.name,
                categories: categories,
                total: maxSum
            }
        );
    });

    return scoreArray;
}


export const getUnansweredGroupCount = ( questions ) => {
    const groups = groupBy( questions );
    const keys = Object.keys( groups );

    let countArray = [];
    const unanswered = keys.map(( key ) => {
        const count = groups[ key ].reduce(( accumulator, question ) => {
            const value = question.answer != undefined ? 0 : 1;
            return accumulator + value;
        }, 0);

        countArray.push({ group: key, unanswered: count, total: groups[key].length });
    });

    return countArray;
}


export const getTotalScore = ( questions ) => {
    const sum = questions.reduce((accumulator, question) => {
        const value = question.answer != undefined ? question.answer : 0;
        return accumulator + value;
    }, 0);

    return sum;
}


export const getTotalUnanswered = ( questions ) => {
    const count = questions.reduce((accumulator, question) => {
        const value = question.answer != undefined ? 0 : 1;
        return accumulator + value;
    }, 0);

    return count;
}




