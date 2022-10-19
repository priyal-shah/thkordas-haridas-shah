import './App.css';
import {Route, Routes  } from "react-router-dom";
import ShopNow from './components/ShopNow.js'
import HomePage from './components/HomePage';
import InfoPage from './components/IfnoPage';
import UserLocation from './components/UserLocation';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ShopNow/>} />
      <Route path="/aboutus" element={<HomePage/>} />
      <Route path="/infopage" element={<InfoPage/>} />
      <Route path="/userlocation" element={<UserLocation/>} />
    </Routes>
  );
}

export default App;
