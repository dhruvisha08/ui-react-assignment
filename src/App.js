import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AddClient from './AddClient';
import ClientDetails from './ClientDetails';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return(
        <div>
            <Router>
            <Switch>
                <SignUp/>
                <Route path="ui-react-assignment/" exact component={SignUp}/>
                <Route path="/signUp" component={SignUp}/>
                <Route path="dhruvisha08.github.io/signIn" component={SignIn}/>
                <Route path="/addClient" component={AddClient}/>
                <Route path="/clientDetails" component={ClientDetails}/>
            </Switch>
            </Router>
        </div>
        
    )
}

export default App;