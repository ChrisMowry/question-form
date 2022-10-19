import { useEffect, useState, useContext } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';
import { getGroupScores, 
    getUnansweredGroupCount, 
    getTotalScore, 
    getTotalUnanswered } from '../../services/GetScores';

const Scores = () => {

    const [ total, setTotal ] = useState( 0 );

    const { questions } = useContext(QuestionContext);

    let unansweredTotal = null;
    let groupScores = null;
    let groupUnanswered = null

    useEffect(() => {
        
        groupScores = getGroupScores( questions );
        groupUnanswered = getUnansweredGroupCount( questions );
        setTotal( getTotalScore( questions ));
        unansweredTotal = getTotalUnanswered( questions ); 

        //console.log( totalScore, unansweredTotal );
        console.log( groupScores, groupUnanswered );


    }, [ questions ]);

    return(
        <>
            <div>{`Total: ${ total }`}</div>

        </>
        
    );
}

export default Scores