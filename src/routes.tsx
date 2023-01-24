import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';

export const Routes = () => (
  <BrowserRouter>
    <Router>
      <Route path='/' element={<Home />}/>
      <Route path='/signin' element={<Signin />}/>
    </Router>
  </BrowserRouter>
);