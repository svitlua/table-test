import React from 'react';
// import ReactHyperResponsiveTable from 'react-hyper-responsive-table';
import ajax from '../ajax';
import DataRow from './DataRow'



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchWord: '',
      filteredData: []
    }
  }

  searchHandle = (event) =>{
    console.log(typeof event.target.value);
    const query = (event.target.value).toLowerCase();
    let searchResult = [];

    this.state.data.forEach(function(data){
        if(query === ''
            || data.title.toLowerCase().indexOf(query)!==-1
            || data.ownerUsername.toLowerCase().indexOf(query)!==-1
            || data.membersCount.toString().indexOf(query)!==-1
            || data.gemsCount.toString().indexOf(query)!==-1)
            searchResult.push(data);
            console.log("query result ", searchResult);
    });

    this.setState({
        filteredData: searchResult,
        searchWord: query
    })

  }

  async componentDidMount(){
    const data = await ajax.fetchData();
    this.setState({
      data: data,
      filteredData: data
    });
    console.log("data from app:", this.state.data);
  }

  render(){
    // const headers = {
    //   title: '',
    //   name: 'Name',
    //   role: 'Role',
    // };

    return(
      <div>
      <div className="app">Table App</div>
      <form>
        <input type="text" value={this.state.searchWord} onChange={this.searchHandle}/>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Owner</th>
            <th>Creation Date</th>
            <th>Members</th>
            <th>Gems</th>
          </tr>
        </thead>
        <tbody>
          {this.state.filteredData.map((data) =>
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




// <ReactHyperResponsiveTable
//     headers={headers}
//     rows={rows}
//     keyGetter={keyGetter}
//     breakpoint={578}
//     tableStyling={({ narrow }) => (narrow ? 'narrowtable' : 'widetable')}
// />
