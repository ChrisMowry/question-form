
import { useContext } from 'react';
import { Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIosOutlined, ArrowBackIosOutlined, PropaneSharp } from '@mui/icons-material';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';
import { STEPS } from '../../constants/constants';


const styles = {
    footer:{
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '3vh',
        left: '0',
        right: '0'
        
    }
}


const Footer = (props) => {

    const navigate = useNavigate();
    const { step, setStep } = useContext( QuestionContext );

    const getPath = ( step ) => {
        const { path } = STEPS.find((page) => page.id === step);
        return path;
    }

    const handleBackClick = () => {
        if (step > 0){
            setStep( step - 1);
            navigate( getPath( step - 1 ));
        }
    }

    const handleNextClick = () => {
        if (step < STEPS.length - 1){
            setStep( step + 1);
            navigate( getPath( step + 1 ));
        }
    }

    return (
        <footer style={ styles.footer }>
            <Toolbar >
                <Button disabled={ step === 0 } onClick={handleBackClick}>
                    <ArrowBackIosOutlined />
                    Back
                </Button>
                <Button disabled={ step >= STEPS.length - 1 } onClick={handleNextClick}>
                    Next
                    <ArrowForwardIosOutlined />
                </Button>
            </Toolbar>
        </footer>
    );
}

export default Footer;