import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home.jsx';
import PostCreate from './screens/PostCreate/PostCreate.jsx';
import PostDetail from './screens/PostDetail/PostDetail.jsx';
import PostEdit from './screens/PostEdit/PostEdit.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='posts/:id' component={PostDetail}></Route> 
        <Route exact path='posts/edit/:id' component={PostEdit}></Route>
        <Route exact path='/new' component={PostCreate}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
