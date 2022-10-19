
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';

const NavBar = () => {

    const { name } = useContext( QuestionContext );

    return (
        <nav>
            <h3>Name: { name }</h3>
            <Link to='/'>Setup</Link>
            <Link to='/questions'>Questions</Link>
            <Link to='/score'>Score</Link>
        </nav>
    );
}

export default NavBar;