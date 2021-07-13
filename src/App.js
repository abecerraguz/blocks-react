
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Navigation></Navigation>
      <Main>
        <SubContents/>
        <SubContents/>
        <SubContents/>
        <Advertisement/>
      </Main>
    </div>
  );
}

export default App;
