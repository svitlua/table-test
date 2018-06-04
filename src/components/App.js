import React from 'react';
import ajax from '../ajax';


class App extends React.Component{

  async componentDidMount(){
    const data = await ajax.fetchData();
    //...
  }

  render(){

    return(
      <div className="app">Table App</div>
    );

  }
}

export default App;
