// 1st - Import

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//2nd - Class Component

class App extends React.Component{
  render(){
    return(
    <>
      <Header />
      <Main />
      <Footer />
      </>
      )
  }
}

//3rd - Export the Component so other files can import them
export default App;