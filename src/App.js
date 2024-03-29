import 'rsuite/dist/rsuite.min.css';
import Landing from './components/views/Landing';
import AiArt from './components/views/AiArt';
import Coming from './components/views/Coming';
import ProjectRequests from './components/views/ProjectRequests';


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
          <Route exact path="/Coming" element={<Coming />} />
          <Route path="/ProjectRequests" element={<ProjectRequests />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
