import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QuestionContextProvider } from './contexts/QuestionContext/QuestionContext';
import { Header, Footer } from './components';
import { TitlePage, QuestionPage, ScoreReportPage, ErrorPage } from './pages';
import { Container } from '@mui/material';
import './App.css';


const styles = {
  container:{
    display: 'flex',
    justifyItems: 'center'
  }
}

const App = () => {
  return (
    <QuestionContextProvider>
      <Router>
        <Header/>
        <Container>
          <Routes>
            <Route path="/" element={ <TitlePage /> } />
            <Route path="/questions/page/:page" element={ <QuestionPage /> } />
            <Route path="/results" element={ <ScoreReportPage /> } />
            <Route path="*" element={ <ErrorPage error={"Not Found"} /> } />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </QuestionContextProvider>
  );
}

export default App;
