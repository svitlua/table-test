import React from 'react';

class DataRow extends React.Component{
  render(){
    return(
      <tr>
    		<td>{this.props.title}</td>
    		<td>{this.props.owner}</td>
    		<td>{this.props.creationDate}</td>
    		<td>{this.props.members}</td>
        <td>{this.props.gems}</td>
    	</tr>
    );

  }


}

// export const DataRow = ({title, owner, creationDate, members, gems}) => (
// 	<tr>
// 		<td>{title}</td>
// 		<td>{owner}</td>
// 		<td>{creationDate}</td>
// 		<td>{members}</td>
//     <td>{gems}</td>
// 	</tr>
// )

// DataRow.propTypes = {
// 	: PropTypes.string.isRequired,
// 	: PropTypes.instanceOf(Date).isRequired,
// 	: PropTypes.bool,
// 	: PropTypes.bool
// }

export default DataRow;
