import React from 'react';
import {BrowserRouter as Router,Routes as Switch ,Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/util/Navbar';
import Register from './components/users/Register';
import Logout from './components/users/Logout';
import Login from './components/users/Login';
import Error from './components/util/Error'
import CreatePost from './components/posts/CreatePost';
import Posts from './components/posts/Posts';

export const Routing = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Switch>
                <Route element={<Home/>} path={'/'} exact/>
                <Route element={<Register/>} path={'/register'} />
                <Route element={<Logout/>} path={'/logout'}  />
                <Route element={<Login/>} path={'/login'} />
                <Route element={<CreatePost/>} path={'/posts/create'} />
                <Route element={<Posts/>} path={'/posts'} />
                <Route element={<Error/>} path={''}/>
            </Switch>
        </Router>
    </div>
  )
}