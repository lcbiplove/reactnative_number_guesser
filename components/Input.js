import React from "react";
import { TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};
Input.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
