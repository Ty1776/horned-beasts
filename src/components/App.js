// 1st - Import

import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import data from '../data/data.json';

//2nd - Class Component

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      beastData : data,
    }
  }

  render(){
    return(
    <>
      <Header />
      <Main beastData = {this.state.beastData} />
      <Footer />
      </>
      )
  }
}

//3rd - Export the Component so other files can import them
export default App;