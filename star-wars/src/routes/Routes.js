import React from "react";
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import DetailPage from '../pages/DetailPage/DetailPage'
import ListPage from '../pages/ListPage/ListPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <ListPage/>
                </Route>

                <Route exact path="/Detalhe">
                    <DetailPage/>
                </Route>
                
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;