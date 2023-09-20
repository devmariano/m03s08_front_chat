import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Nickname';
//import Login from './pages/Login';
//import Register from './pages/Register';



function App() {
  return (  

    <Router>
        <Routes>
          <Route path="/" element={<Chat/>}/>
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/register" element={<Register/>} /> */}
          {/* <Route path="*" element={<PageNotFound/>} /> */}
        </Routes>
    </Router>
   
  );
}

export default App;
