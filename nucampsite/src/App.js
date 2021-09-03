import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { CAMPSITES } from './shared/campsites';
import Main from './components/MainComponent';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Main />
            </div>
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
