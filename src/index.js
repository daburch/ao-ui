import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from '@apollo/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Matches from './routes/Matches'

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URL,
  cache: new InMemoryCache({})
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="matches" element={ <Matches /> }>
            <Route path=":matchId" element={ <Matches /> } />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
