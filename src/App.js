import Landing from './components/landing'
import Quiz from './components/quiz'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="quiz" element={<Quiz/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
