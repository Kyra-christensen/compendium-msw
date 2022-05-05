import { Link, Route, Switch } from 'react-router-dom';
import List from './views/Characters/List';
import Detail from './views/Characters/Detail';

export default function App() {
  return (
    <Switch>
      <Route path='/people/:id'>
        <Detail />
      </Route>
      <Route path='/people'>
        <List/>
      </Route>
      <Route path='/'>
        <p>Homepage</p>
        <Link to='/people'>View List</Link>
      </Route>
    </Switch>
  );
}
