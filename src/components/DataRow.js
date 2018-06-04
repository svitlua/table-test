import React from 'react';
import format from 'date-fns/format'

class DataRow extends React.Component{

  // dateFormat = (creationDate) => {
  //   const date = new Date(creationDate);
  //   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //
  //   return `${monthNames[date.getMonth()+1]} ${date.getDate()}, ${date.getFullYear()}`;
  // }

  render(){
    // let date = this.dateFormat(this.props.creationDate);
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
