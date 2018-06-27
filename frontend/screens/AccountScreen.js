import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import { reduxForm, Field } from "redux-form";
import { Overlay, Input, Button, Divider } from 'react-native-elements';
import UserForm from '../components/UserForm';
import {connect} from 'react-redux';


function textInput(props) {
  const { input } = props;
  return (
      <Input
        onChangeText={input.onChange}
        value={input.value}
      />
  );
}

class AccountForm extends React.Component {
  render() {
    return (
      <View>
        <Input placeholder='First Name'/>
        <Input placeholder='Last Name'/>
        <Input placeholder='Email'/>
        <Input placeholder='Company Name'/>

        <Field
          name="firstname"
          component={textInput}
        />
        <Field
          name="lastname"
          component={textInput}
        />
        <Field
          name="email"
          component={textInput}
        />
        <Field
          name="company"
          component={textInput}
        />

        <Button
          onPress={this.props.handleSubmit}
          text="Update"
          textStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "#3498db",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />

      </View>
        )}
}

var AccountFormRedux =  reduxForm({
  form: 'account-form'
})(AccountForm)


 class AccountScreen extends React.Component {

  static navigationOptions = {
    title: 'Account',
    header: null
  };

  submitAccountForm(values){
    var ctx = this;
    fetch('http://10.2.1.32:3000/updateuser?id='+this.props.userid+'&lastname='+values.lastname+'&firstname='+values.firstname+'&email='+values.email+'&company='+values.company)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

    });
  }

  render() {
    return (
      <View style={styles.container}>

        <AccountFormRedux onSubmit={this.submitAccountForm}/>

        <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

        </View>

        <UserForm isVisible={this.props.isVisible}/>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return { isVisible: state.isVisible , userid: state.user._id}
}

export default connect(
    mapStateToProps,
    null
)(AccountScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
