import React from 'react';
import Cookies from 'universal-cookie';
import { Redirect }from 'react-router-dom';

class Auth extends React.Component{
  constructor(props){
    super(props)
    const cookies = new Cookies()
    this.state = {
       dangnhap: cookies.get('isLogin') 
    }
  }

  chuyendoi(){
    if(this.state.dangnhap === 'true'){
      return this.props.macdinh
    }else{
      return <Redirect to={this.props.hoackhac}></Redirect>
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.chuyendoi()}
      </React.Fragment>
    )
  }
}

export default Auth