import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QuestionContextProvider } from './contexts/QuestionContext/QuestionContext';
import { NavBar } from './components';
import { TitlePage, QuestionPage, ScoreReportPage, ErrorPage } from './pages';

const App = () => {
  return (
    <QuestionContextProvider>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={ <TitlePage /> } />
            <Route path="/questions/page/:page" element={ <QuestionPage /> } />
            <Route path="/score" element={ <ScoreReportPage /> } />
            <Route path="*" element={ <ErrorPage error={"Not Found"} /> } />
          </Routes>
      </Router>
    </QuestionContextProvider>
  );
}

export default App;
