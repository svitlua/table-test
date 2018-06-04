import React from 'react';
// import naturalSort from 'javascript-natural-sort';
import format from 'date-fns/format'
import {Table} from 'react-bootstrap';
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
            || data.gemsCount.toString().indexOf(query)!==-1
            //TODO: add date comparison
            )
            searchResult.push(data);
            console.log("format:", format(data.createdAt, 'MMMM D, YYYY'));
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
  }

  sortBy(key) {
    console.log(key);
    let arrayCopy = this.state.filteredData;
    arrayCopy.sort(this.compareAscBy(key));
    this.setState({filteredData: arrayCopy});
  }

  compareAscBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  compareDescBy(key) {
    return function (a, b) {
      if (b[key] < a[key]) return -1;
      if (b[key] > a[key]) return 1;
      return 0;
    };
  }

  render(){
    return(
      <div className="app">
      <div className="app--header">
        <div className="app--title">Manage groups</div>
        <form>
          <div className="title-text_color">Search</div>
          <input type="text" placeholder="&#xf002; Title, owner, etc." className="search-input" value={this.state.searchWord} onChange={this.searchHandle}/>
        </form>
      </div>

        <div className="table-container">
        <Table responsive>
          <thead>
            <tr className="title-text_color">
              <th onClick={() => this.sortBy('title')}>Title</th>
              <th onClick={() => this.sortBy('ownerUsername')}>Owner</th>
              <th onClick={() => this.sortBy('createdAt')}>Creation Date</th>
              <th onClick={() => this.sortBy('membersCount')}>Members</th>
              <th onClick={() => this.sortBy('gemsCount')}>Gems</th>
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
        </Table>
        </div>
      </div>
    );
  }
}

export default App;
