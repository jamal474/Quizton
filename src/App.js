import Landing from './components/landing'
import Quiz from './components/quiz'
import NotFound from './components/NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/quiz/:category" element={<Quiz/>}/>
            <Route path="/404" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
