import 'rsuite/dist/rsuite.min.css';
import Landing from './components/views/Landing';
import { CustomProvider } from 'rsuite';

function App() {
  return (
    <CustomProvider theme='dark'>
      <div>
        <Landing />
      </div>
    </CustomProvider>

  );
}

export default App;
