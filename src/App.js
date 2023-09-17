import React from 'react';
import './App.css';
import MainNav from './MainNav';
import Exams from './Exams';
import Leaderboard from './Leaderboard';
import Testing from './Testing';
import { Route, Routes } from 'react-router-dom';
import ScoreForm from './ScoreForm'
import NotFound from './NotFound';
import Introduction from './Introduction';
import Docs from "./Docs"

// add dashboard for admin to update test and users
// need at least 100 question and maybe the backend should pick random 20 questions. 

function App() {
  // const [examID, setExamID] = useState(null)

  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Introduction />} />
        <Route exact path="/exams" element={<Exams />} />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/startExam/:examId" element={<Testing />} />
        <Route exact path="/show-score" element={<ScoreForm />} />
        <Route exact path='/docs' element={<Docs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
