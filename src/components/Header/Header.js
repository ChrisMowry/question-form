
import { Link,  } from 'react-router-dom';
import { useContext } from 'react';
import { QuestionContext } from '../../contexts/QuestionContext/QuestionContext';
import { Stepper, Step, StepLabel, AppBar, Toolbar } from '@mui/material';
import { theme } from '../../theme/theme';
import { STEPS, HEADER_HEIGHT } from '../../constants/constants';



const Header = () => {
    const { step, setStep } = useContext( QuestionContext );

    const style = {
        appbar: {
            position: 'sticky',
            flex: 'none',
            backgroundColor: theme.colors.main,
            height: `${HEADER_HEIGHT}px`,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            overflow: 'hidden'
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        },
        stepper: {
            width: '65vw'
        },
        links: {
            textDecoration: 'none',
            color: theme.colors.secondary
        }
    };

    return (
        <AppBar sx={ style.appbar }>
            <Toolbar sx={ style.toolbar } >
                <Stepper activeStep={ step } sx={ style.stepper }>
                    {
                        STEPS.map((step) => {
                            return (
                                <Step key={ step.id }>
                                    <StepLabel>
                                        <Link style={ style.links }
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