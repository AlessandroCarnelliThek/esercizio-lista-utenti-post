import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import ListaUtenti from './components/ListaUtenti.js';
import ListaPosts from './components/ListaPosts.js';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link exact="true" to="/">Lista Utenti</Link>
      </nav>  
      <div>
        <Switch>
          <Route exact path="/">
            <ListaUtenti />
          </Route>
          <Route path="/posts/:id">
            <ListaPosts />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
//non vi sento. 
//facciamo 15 minuti di pausa mentre sistemo

export default App;
