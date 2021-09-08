import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientDetails extends Component{
    
    render(){
        
        const details = this.props.client;
        console.log(details)
        return(
         <div>
            {details}
         </div>
        )
    }
}

const mapStateToProps = state => ({
    client: state.client
  })

  export default connect(mapStateToProps)(ClientDetails);