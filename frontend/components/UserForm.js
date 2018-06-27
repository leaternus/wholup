import React from 'react';
import { Text, View } from 'react-native';
import { Overlay, Input, Button, Divider } from 'react-native-elements';
import {connect} from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';

class UserForm extends React.Component {

   constructor() {
    super();
    this.submitSignIn = this.submitSignIn.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  submitSignIn(values) {
    var ctx = this;
    fetch('http://10.2.1.32:3000/signin?email='+values.email+'&password='+values.password)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if(data._id){
          ctx.props.onSigninClick(data);
        }
    });

  }
  submitSignUp(values) {
    var ctx = this;
    fetch('http://10.2.1.32:3000/signup?lastname='+values.lastName+'&firstname='+values.firstName+'&email='+values.email+'&password='+values.password)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if(data._id){
          ctx.props.onSignupClick(data);
        }
    });
  }

  render() {
    return (<Overlay isVisible={this.props.isVisible}>
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

        <SignIn onSubmit={this.submitSignIn}/>

        <Divider style={{ backgroundColor: 'blue' }} />

        <SignUp onSubmit={this.submitSignUp}/>

      </View>

    </Overlay>);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSigninClick: function(user) {
        dispatch( {type: 'hideModalSignin'} );
        dispatch( {type: 'userSignin', user } )
    },
    onSignupClick: function(user) {
        dispatch( {type: 'hideModalSignin'} );
        dispatch( {type: 'userSignup', user } )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(UserForm);
