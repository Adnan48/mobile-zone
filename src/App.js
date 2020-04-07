import React, { PureComponent } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Provider} from 'react-redux';
import View from './components/View';
import Text from './components/Text';
import ProductTable from './components/ProductTable';
import {products} from './product';
import store from './store';
import {productDataFromFile} from './actions/uiAction';
import EditProductView from './components/EditProductView';



export default class App extends PureComponent{
  constructor(){
    super();
    store.dispatch(productDataFromFile(products))
  }

  render(){
    return(
      <Router>
        <Provider store={store} >
<View style={{ flexDirection: 'column', width: '100%', alignItems: 'center' }} >
  <Text style={{ fontWeight: 'bold', fontSize: 20 }} > Mobile Zone </Text>
  <Switch>
        <Route exact path="/" component={({history}) => <ProductTable history={history} />} />
        <Route exact path="/edit/:index" component={({match, history}) =>{
                  const index = match && match.params && match.params.index;
                  return <EditProductView index={index} history={history} />}} />

        </Switch>

  </View>
  </Provider>
  </Router>
    )
  }
};
 