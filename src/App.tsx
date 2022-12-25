import { Routes, Route } from 'react-router-dom';
import AuthRootComponent from './components/auth';
import Home from './components/home';
import PrivateRoute from './utils/router/privateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<AuthRootComponent />} />
        <Route path="/register" element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
