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
                {/* <SignUp/> */}
                <Route path="dhruvisha08.github.io/ui-react-assignment/" exact component={SignUp}/>
                <Route path="dhruvisha08.github.io/ui-react-assignment/signUp" component={SignUp}/>
                <Route path="dhruvisha08.github.io/ui-react-assignment/signIn" component={SignIn}/>
                <Route path="dhruvisha08.github.io/ui-react-assignment/addClient" component={AddClient}/>
                <Route path="dhruvisha08.github.io/ui-react-assignment/clientDetails" component={ClientDetails}/>
            </Switch>
            </Router>
        </div>
        
    )
}

export default App;