import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { reduxForm, Field } from "redux-form";


function textInput(props) {
  const { input } = props;
  return (
      <Input
        onChangeText={input.onChange}
        value={input.value}
      />
  );
}

class SignUp extends React.Component {
  render() {
    return (
      <View>

        <Field
          name="firstName"
          component={textInput}
        />
        <Field
          name="lastName"
          component={textInput}
        />
        <Field
          name="email"
          component={textInput}
        />
        <Field
          name="password"
          component={textInput}
        />

        <Button
          onPress={this.props.handleSubmit}
          text="Sign Up"
          textStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "#3498db",
            width: 200,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
      </View>
    )
  }
}

export default reduxForm({
  form: 'signUp-form'
})(SignUp)
