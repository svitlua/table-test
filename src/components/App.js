import React from 'react';
import ajax from '../ajax';
import DataRow from './DataRow'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }


  async componentDidMount(){
    const data = await ajax.fetchData();
    this.setState({data});
    console.log("data from app:", this.state.data);
  }

  render(){
    return(
      <div>
      <div className="app">Table App</div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Owner</th>
              <th>Creation Date</th>
              <th>Members</th>
              <th>Gens</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data) =>
              <DataRow key={data._id}
                     title={data.title}
                     owner={data.ownerUsername}
                     creationDate={data.createdAt}
                     members={data.membersCount}
                     gems={data.gemsCount}/>
            )}
          </tbody>
        </table>
      </div>
    );

  }
}

export default App;
