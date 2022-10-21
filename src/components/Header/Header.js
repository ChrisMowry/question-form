
import { Link,  } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';
import { Stepper, Step, StepLabel, AppBar, Toolbar } from '@mui/material';
import { theme } from '../../theme/theme';
import { STEPS } from '../../constants/constants';

const styles = {
    appbar: {
        position: 'sticky',
        backgroundColor: theme.colors.main
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    stepper: {
        width: '64vw'
    },
    links: {
        textDecoration: 'none',
        color: theme.colors.secondary
    }
};

const Header = () => {
    const { step, setStep } = useContext( QuestionContext );
    return (
        <AppBar sx={ styles.appbar }>
            <Toolbar sx={ styles.toolbar } >
                <Stepper activeStep={ step } sx={ styles.stepper }>
                    {
                        STEPS.map((step) => {
                            return (
                                <Step key={ step.id }>
                                    <StepLabel>
                                        <Link style={ styles.links } 
                                            to={ step.path }
                                            onClick={()=>{ setStep(step.id) }}
                                        >
                                            { step.label }
                                        </Link>
                                    </StepLabel>
                                </Step>
                            );
                        })
                    }
                </Stepper>
            </Toolbar>
        </AppBar>
    );
}

export default Header;