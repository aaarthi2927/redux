import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './component/UserList';
import Useritem from './component/Useritem';
import UserDetail from './component/UserDetail';
function App() {
  return (
    <div className="App">
     <Routes>
   
    <Route path='/' element={<UserList/>} />
    <Route path='/home/:id' element={<UserDetail/>} />
  </Routes>
    </div>
  );
}

export default App;
/*
<Route path='/home/add' element={<Adduser/>} />
<Route path='/home/:id' element={<Userview/>} />
<Route path='/home/edit/:id' element={<Editview/>} />*/
function Home(){
  return(
    <div>
      <h1>hi all</h1>
    </div>
  )
}