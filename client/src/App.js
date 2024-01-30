import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'src/components/Header/Header';
import Board from './pages/Board/Board';
import AllTasks from './pages/AllTasks/AllTasks';

function App() {

  //Check Node Environment
  console.log(process.env.NODE_ENV);

  let apiURL = '';
  if(process.env.NODE_ENV === 'production') {
    apiURL = process.env.REACT_APP_PROD_API_URL;
  } else {
    apiURL = process.env.REACT_APP_DEV_API_URL;
  }

  console.log(apiURL);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Board apiURL={apiURL}/>} />
          <Route path='alltasks' element={<AllTasks apiURL={apiURL}/>} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
