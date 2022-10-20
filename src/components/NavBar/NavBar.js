
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';

const NavBar = () => {

    const { name } = useContext( QuestionContext );

    return (
        <nav>
            <h3>Name: { name }</h3>
            <span> </span>
            <Link to='/'>Setup</Link>
            <span> </span>
            <Link to='/questions/page/1'>Questions</Link>
            <span> </span>
            <Link to='/score'>Score</Link>
        </nav>
    );
}

export default NavBar;