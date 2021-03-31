import React from 'react'
import { Switch, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';

import NavBar from '../../Common/Navbar'
import UseRefPage from '../../Components/UseRef'

const MainRoute = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="lg" className="margin-30">
                <Switch>
                    <Route exact path="/" component={UseRefPage} />
                    <Route exact path="/UseRef" component={UseRefPage} />
                </Switch>
            </Container>
        </>
    )
}

export default MainRoute
