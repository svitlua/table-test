import React from 'react';
import format from 'date-fns/format'

class DataRow extends React.Component{

  render(){
    const date = format(this.props.creationDate, 'MMMM D, YYYY')
    return(
      <tr>
    		<td>{this.props.title}</td>
    		<td>{this.props.owner}</td>
    		<td>{date}</td>
    		<td>{this.props.members}</td>
        <td>{this.props.gems}</td>
    	</tr>
    );

  }
}

export default DataRow;
