import React from 'react';
import './App.css';
import Home from "./components/pages/home/home";
import {Switch, Route} from 'react-router-dom';
import About from "./components/pages/about/about";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './static/assets/sass/style.scss';

//
// <link rel="stylesheet" type="text/css" href="assets/css/animated.css" />
//     <link rel="stylesheet" type="text/css" href="assets/css/compile-sass/style.css" />
//     <link rel="stylesheet" type="text/css" href="assets/css/compile-sass/main.css" />

function App() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/about'} component={About}/>
            </Switch>
        </div>
    );
}

export default App;
