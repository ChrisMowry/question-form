import { NameForm } from "../../components";
import { getQuestionsMetadata } from '../../services/GetQuestions';


const styles = {
    titlePage: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '65vw',
        height: '70vh'
    },
    title: {
        textAlign: 'center'
    },
    credits: {
        display: 'block',
        fontStyle: 'italic',
        textAlign: 'center',
        width: '70%'
    },
    instructions: {
        textAlign: 'center'
    },
    nameForm:{
        padding: '60px',
        display: 'flex',
        position: 'relative'
    }
}

const TitlePage = (props) => {

    const { name, credits, instructions } = getQuestionsMetadata();

    return(
        <div style={ styles.titlePage }>
            <h1 style={ styles.title }>{ name }</h1>
            <p style={ styles.credits }>{ credits }</p>
            <p style={ styles.instructions }>{ instructions }</p>
            <NameForm style={ styles.nameForm }/>
        </div>
    );
}

export default TitlePage;