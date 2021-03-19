import React, { useState } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Movies from './components/Movies/Movies'
import Checkout from './components/Checkout/Checkout'

const history = createBrowserHistory()


const App = () => {
    const [selectedMovie, setSelectedMovie] = useState(null)

    return (
        <Router history={history}>
            <Switch>
                <Route 
                    exact
                    path='/'
                    render={() => (
                        <Movies 
                            history={history}
                            selectMovie={setSelectedMovie}
                        />
                    )}
                />
                <Route                    
                    path='/checkout'
                    render={ selectedMovie ? () => (<Checkout />) : null }
                />
            </Switch>
            {selectedMovie ? (<Checkout selectedMovie={selectedMovie} history={history}/>) : null}
        </Router>
        // <div>
        //     <Movies />
        // </div>
    )
}

export default App