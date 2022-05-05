import { Link, Route, Switch } from 'react-router-dom';
import List from './views/Characters/List';
import Detail from './views/Characters/Detail';

export default function App() {
  return (
    <Switch>
      <Route path='/quotes/:character'>
        <Detail />
      </Route>
      <Route path='/quotes'>
        <List/>
      </Route>
      <Route path='/'>
        <p>Homepage</p>
        <Link to='/quotes'>View List</Link>
      </Route>
    </Switch>
  );
}
