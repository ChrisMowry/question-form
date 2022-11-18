import { useEffect, useState, useContext } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';
import { getGroupScores, 
    getUnansweredGroupCount, 
    getTotalScore, 
    getTotalUnanswered } from '../../services/GetScores';

const Scores = () => {

    const [ total, setTotal ] = useState( {} );
    const [ groupScores, setGroupScores ] = useState ( [] );
    const { name, submitDate, questions } = useContext(QuestionContext);

    useEffect(() => {

        
        const totalObj = getTotalScore( questions );
        const groups = getGroupScores( questions );

        setTotal( totalObj );
        setGroupScores( groups );


        //groupScores = getGroupScores( questions );
        //groupUnanswered = getUnansweredGroupCount( questions );

        
        //unansweredTotal = getTotalUnanswered( questions ); 

        //console.log( totalScore, unansweredTotal );
        //console.log( groupScores, groupUnanswered );

    }, [ questions ]);

    return(
        <>
            <h2>{`Name: ${ name }`}</h2>
            <h2>{`Date: ${ submitDate }`}</h2>
            <h2>Total</h2>
            <div>{`Score: ${ total.score }`}</div>
            <div>{`Status : ${ total.category }`}</div>
            <h2>Group Total</h2>
            {
                groupScores.map((group) => {
                    return (
                        <div key={group.name}>
                            <h3>{ group.name }</h3>
                            <div>{`Score: ${ group.score }`}</div>
                            <div>{`Status : ${ group.category }`}</div>                            
                        </div>
                    );
                })
            }

        </>
        
    );
}

export default Scores