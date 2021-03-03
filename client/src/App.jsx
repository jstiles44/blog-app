import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import PostCreate from './screens/PostCreate/PostCreate';
import PostDetail from './screens/PostDetail/PostDetail';
import PostEdit from './screens/PostEdit/PostEdit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/posts/:id' component={PostDetail}></Route> 
        <Route exact path='/posts/edit/:id' component={PostEdit}></Route>
        <Route exact path='/new' component={PostCreate}/>
      </Switch>
    </div>
  );
}

export default App;
