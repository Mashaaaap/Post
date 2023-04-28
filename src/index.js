import ReactDOM from 'react-dom/client'
import React from 'react'
import reportWebVitals from './reportWebVitals'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

let initialStore = [
  {
      title: '1st post',
      text: 'Its my first post'
  }
]

const reRender = (postsStore) => {
root.render(
  <div>
    <App
      postsStore = {postsStore}
      reRender = {reRender}
    />
  </div>
 )
}

reRender(initialStore)

reportWebVitals()
