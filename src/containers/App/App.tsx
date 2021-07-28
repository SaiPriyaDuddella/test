import React from 'react';
import './App.css';
import Dashboard from '../../components/Dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Dashboard></Dashboard>
          </div>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
