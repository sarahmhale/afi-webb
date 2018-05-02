import React from 'react';
import ReactDOM from 'react-dom';
import Subscriber from './components/Subscriber'
import Company from './components/Company'
import StartPage from './components/StartPage'
import {Header} from './components/Header'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://130.239.228.169:3000/graphql' }),
  cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path={"/"} component={Subscriber}/>
          <Route path={"/company"} component={Company}/>
          <Route path={"/ads"} component={StartPage}/>
        </div>
      </BrowserRouter>
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
