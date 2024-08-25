import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import MainPage from './components/MainPage/main-page';
import EmptyMainPage from './components/EmptyMainPage/empty-main-page';
import Favorites from './components/Favorites/favorites';
import EmptyFavorites from './components/Favorites/empty-favorites';
import LoginPage from './components/LoginPage/login-page';
import OfferLogged from './components/OfferPage/offer-logged';
import OfferNotLogged from './components/OfferPage/offer-not-logged';
import NotFoundPage from './components/NotFoundPage/not-found-page';
import PrivateRoute from './components/PrivateRoute/private-route';

import '../public/css/main.css';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage/>}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.Offer} element={<OfferLogged/>}/>
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites/></PrivateRoute>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

