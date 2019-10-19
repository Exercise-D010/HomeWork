import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Product from '../../pages/product/product';
import HomePage from "../../pages/home/home";
import BlogPage from "../../pages/blog/blog";
import AboutPage from "../../pages/about/about";
import ContactPage from "../../pages/contact/contact";
import LoginPage from "../../pages/login/login";
import Auth from "../../services/Auth";
import ProfilePage from "../../pages/profile/profile"

const Router = () =>(
  <BrowserRouter>
    <Switch>
      <Route path='/' render={
        () =>(
          <Auth hoackhac='/login' macdinh={
            <ProfilePage></ProfilePage>
          }></Auth>
        )
      }></Route>
      <Route path='/product' exact component={ Product }></Route>
      <Route path='/blog' exact component={ BlogPage }></Route>
      <Route path='/about' exact component={ AboutPage }></Route>
      <Route path='/contact' exact component={ ContactPage }></Route>
      <Route path='/login' exact component={ LoginPage }></Route>
    </Switch>
  </BrowserRouter>
)

export default Router