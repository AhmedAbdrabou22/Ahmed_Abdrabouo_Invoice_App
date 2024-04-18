import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from './Pages/Main';
import InvoiceDetails from './Pages/InvoiceDetails';
function App() {
  return (
    <div className="App">
      <div>

        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} />
            <Route path='/invoice/:id' element={<InvoiceDetails />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
