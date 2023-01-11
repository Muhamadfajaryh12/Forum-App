import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/Homepage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import NotFoundPage from './pages/NotFoundPage';
import { useSelector,useDispatch } from "react-redux";
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
function App() {
  const {
    authUser = null,
    isPreload = false
  } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {   
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
          <Loading/>
        <main>
          <Routes>
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>   
    );
  }
  return (
    <>
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} signOut={onSignOut} />
          <Loading/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage/>}/>
            <Route path="/threads/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
