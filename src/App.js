import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QuestionContextProvider } from './contexts/QuestionContext/QuestionContext';
import { Header, Footer } from './components';
import { TitlePage, QuestionPage, ScoreReportPage, ErrorPage } from './pages';
//import { Container } from '@mui/material';
import './App.css';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from './constants/constants';




const App = () => {

  const styles = {
    container:{
      height: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'center',
      overflowY: 'auto'
    }
  }

  return (
    <QuestionContextProvider>
      <Router>
        <Header/>
        <div style={ styles.container }>
          <Routes>
            <Route path="/" element={ <TitlePage /> } />
            <Route path="/questions/page/:page" element={ <QuestionPage /> } />
            <Route path="/results" element={ <ScoreReportPage /> } />
            <Route path="*" element={ <ErrorPage error={"Not Found"} /> } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </QuestionContextProvider>
  );
}

export default App;
