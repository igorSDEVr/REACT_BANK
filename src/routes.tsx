import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export const Routes = () => (
  <BrowserRouter>
    <Router>
      <Route path='/' element={<Home />}/>
    </Router>
  </BrowserRouter>
);