
import './App.css';
import React, { Component } from 'react';


import './App.css';

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
        );
    };
}



export default App;

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             campsites: CAMPSITES
//         };
//     }
//     render() {
//         return (
//             <div className="App">
//                 <Navbar dark color="primary">
                    
//                 <div className="container">
//                     <NavbarBrand href="/">NuCamp</NavbarBrand>
//                 </div>
                
//                 </Navbar>
//                 {/* <Directory /> */}
//                 <Directory campsites={this.state.campsites} />
//             </div>
//         );
//     }
//}

//export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
