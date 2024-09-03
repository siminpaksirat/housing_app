import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
// import AuthProvider from 'react-auth-kit/AuthProvider';


import store from './store.js'
import App from './App.jsx'
import './index.css'

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//       <h1>Something went wrong.</h1>
//       )
//     }

//     return this.props.children;
//   }
// }




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>,
)
