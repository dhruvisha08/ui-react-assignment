import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import './style.css';

class ClientDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            client : {}
        };
    }

    componentDidMount(){
        this.setState({
            client : this.props.client
        })
    }

    componentWillReceiveProps(props, nextProps){
        if(this.props.client !== nextProps.client){
            this.setState({
                client : nextProps.client
            });
            console.log("updated", this.state.client);
        }
    }

    render(){

        let client = this.state.client;
        console.log(client)
        return(
         <div className="body">
             <NavBar active="nav-item nav-link active text"
                     passive="nav-item nav-link text"/>
             <h1>Client Details</h1>
             <div className="outline">
             {JSON.stringify(client, null, 2)}
             </div>
         </div>
        )
    }
}

const mapStateToProps = state => ({
    client: state.client
  })

  export default connect(mapStateToProps)(ClientDetails);