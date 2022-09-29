import StartGame from './components/StartGame';
import { GlobalStyle } from './AppStyle';

const App = () => { 
  return (
    <>
    <GlobalStyle/>
    <div className="app">
      <StartGame/>
    </div>
    </>
  );
}

export default App;
