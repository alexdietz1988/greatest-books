import React from 'react'
import ReactDOM from 'react-dom/client'
import './../node_modules/bulma/css/bulma.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import reducers from './reducers'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const store = createStore(reducers, composeWithDevTools())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)