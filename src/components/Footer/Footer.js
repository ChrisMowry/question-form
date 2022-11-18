
import { useContext } from 'react';
import { Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIosOutlined, ArrowBackIosOutlined } from '@mui/icons-material';
import { QuestionContext } from '../../contexts';
import { STEPS } from '../../constants/constants';





const Footer = (props) => {

    const navigate = useNavigate();
    const { step, setStep } = useContext( QuestionContext );

    const styles = {
        footer:{
            display: 'flex',
            flex: 'none',
            justifyContent: 'center',
            left: '0',
            right: '0'
        },
        toolbar:{
            borderRadius: '10px',
            boxShadow: '0px 3px 10px 1px rgba(0,0,0,0.4)',
            zIndex: '1000'
        }
    }

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
            <Toolbar sx={ styles.toolbar }>
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