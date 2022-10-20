import { getGroup, getTotalCategories } from './GetQuestions';

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
    keys.forEach(( key ) => {
        // gets score sum
        const sum = groups[ key ].reduce(( accumulator, question ) => {
                        const answer = question.answer !== undefined ? question.answer : 0;
                        return accumulator + answer;
                    }, 0);
                   
        // gets max score sum
        const maxSum = groups[ key ].reduce(( accumulator, question ) => {
            const maxValue = Math.max( ...question.values.map((value) => value.value) )
            return accumulator + maxValue;
        }, 0);  

        // gets the category based on the score
        const { name, categories } = getGroup( parseInt(key) );
        const category = categories.find( (category) => {
            const { min, max = maxSum } = category;
            return parseFloat(sum) >= parseFloat(min) && parseFloat(sum) <= parseFloat(max);
        });

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
    keys.forEach(( key ) => {
        const count = groups[ key ].reduce(( accumulator, question ) => {
            const value = question.answer !== undefined ? 0 : 1;
            return accumulator + value;
        }, 0);

        countArray.push({ group: key, unanswered: count, total: groups[key].length });
    });

    return countArray;
}


export const getTotalScore = ( questions ) => {

    // calculates the total score
    const sum = questions.reduce((accumulator, question) => {
        const value = question.answer !== undefined ? question.answer : 0;
        return accumulator + value;
    }, 0);

    // calculates the max total score
    const maxTotal = questions.reduce((accumulator, question) => {
        const maxValue = Math.max( ...question.values.map((value) => value.value) )
        return accumulator + maxValue;
    }, 0);

    // determines the category of the total score
    const categories = getTotalCategories();
    const category = categories.find( (category) => {
        const { min, max = maxTotal } = category;
        return parseFloat(sum) >= parseFloat(min) && parseFloat(sum) <= parseFloat(max);    
    });

    return {
        score: sum,
        category: category.name,
        categories: categories,
        total: maxTotal
    }
}


export const getTotalUnanswered = ( questions ) => {
    const count = questions.reduce((accumulator, question) => {
        const value = question.answer !== undefined ? 0 : 1;
        return accumulator + value;
    }, 0);

    return count;
}




