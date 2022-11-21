import { Route, Routes } from 'react-router-dom';
import ProcedureList from './component/ProcedureList';
import ProcedureDetail from './component/ProcedureDetail';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/home' element={<ProcedureList/>}/>
    <Route path='/home/:id' element={<ProcedureDetail/>}/>
  </Routes>
    </div>
  );
}

export default App;
