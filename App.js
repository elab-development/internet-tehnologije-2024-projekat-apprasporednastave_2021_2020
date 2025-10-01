import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/HomePage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/pages/LoginPage.jsx';
import RegisterPage from './components/pages/RegisterPage.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import MojRasporedPage from './components/pages/MojRasporedPage.jsx'
import { useState,useEffect } from "react";
import LogoutPage from './components/pages/LogoutPage.jsx';
import DanRasporedaPage from './components/pages/DanRasporedaPage.jsx';
import AdminKreirajRasporedPage from './components/pages/AdminKreirajRasporedPage.jsx';
import AdminStudentiPage from './components/pages/AdminStudentiPage.jsx';
import PrijaviPrisustvoPage from './components/pages/PrijaviPrisustvoPage.jsx';
import AdminStatistikaStudenataPage from './components/pages/AdminStatistikaStudenataPage.jsx';
import AdminStatistikaTerminaPage from './components/pages/AdminStatistikaTerminaPage.jsx';
import MojProfilPage from './components/pages/MojProfilPage.jsx';
import AdminPredmetiPage from './components/pages/AdminPredmetiPage.jsx';

function App() {

  const [token, setToken] = useState();

  const [user, setUser] = useState({});

  const [isLoggedIn,setIsLoggedIn] = useState(false);


  function addToken(auth_token) {
    setToken(auth_token);
  }

  function addUser(user) {
    setUser(user);
    console.log("current user : " +user);
  }
  function addIsLoggedIn(isloggedin)
  {
    setIsLoggedIn(isloggedin);
    console.log("Am I logged in ? " +isloggedin);
  }
  return (
    <BrowserRouter className="App">
    <Routes>

      <Route index element={<HomePage />} />
      <Route path="home" element={<HomePage ></HomePage>}></Route>
      <Route path="login" element={<LoginPage addToken={addToken} addUser={addUser} addIsLoggedIn={addIsLoggedIn} ></LoginPage>}></Route>
      <Route path="register" element={<RegisterPage ></RegisterPage>}></Route>
      <Route path="about" element={<AboutPage ></AboutPage>}></Route>
      <Route path="mojraspored" element={<MojRasporedPage  token={token} user={user}></MojRasporedPage>}></Route>
      <Route path="logout" element={<LogoutPage  token={token} addIsLoggedIn={addIsLoggedIn}></LogoutPage>}></Route>
      <Route path="mojraspored/:dan" element={<DanRasporedaPage></DanRasporedaPage>}></Route>
      <Route path="kreirajraspored" element={<AdminKreirajRasporedPage></AdminKreirajRasporedPage>}></Route>
      <Route path="spisakstudenata" element={<AdminStudentiPage></AdminStudentiPage>}></Route>
      <Route path="spisakpredmeta" element={<AdminPredmetiPage></AdminPredmetiPage>}></Route>
      <Route path="prijaviprisustvo" element={<PrijaviPrisustvoPage></PrijaviPrisustvoPage>}></Route>
      <Route path="statistikastudenata" element={<AdminStatistikaStudenataPage></AdminStatistikaStudenataPage>}></Route>
      <Route path="statistikatermina" element={<AdminStatistikaTerminaPage></AdminStatistikaTerminaPage>}></Route>
      <Route path="mojprofil" element={<MojProfilPage></MojProfilPage>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
