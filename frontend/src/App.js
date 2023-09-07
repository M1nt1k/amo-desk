import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  useHistory,
} from 'react-router-dom';

import Home from './components/home';
import OAuthPopup from './components/OAuth2Popup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OAuthPopup />} path="/callback" />
        <Route element={<Home mode='realtime' />} path="/" />
        <Route element={<Home mode='time' />} path="/time" />
        <Route element={<Home mode='depth' />} path="/depth" />
        <Route element={<Home mode='balance' />} path="/balance" />
        <Route element={<Home mode='cam' />} path="/cam" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
