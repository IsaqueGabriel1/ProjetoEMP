import React from 'react';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Ajustes from './Ajustes';
import Niveis from './Niveis';
import { Switch, Route} from 'react-router-dom';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Page1" component={Page1} exact/>
            <Route path="/Page2" component={Page2} exact/>
            <Route path="/Page3" component={Page3} />
            <Route path="/Ajustes" component={Ajustes} />
            <Route path="/Niveis" component={Niveis} />
        </Switch>
    )
}

export default Routes;