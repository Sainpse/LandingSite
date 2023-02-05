import 'rsuite/dist/rsuite.min.css';
import Landing from './components/views/Landing';
import AiArt from './components/views/AiArt';
import {
  BrowserRouter,
  Route, Routes
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Aiart" element={<AiArt />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
