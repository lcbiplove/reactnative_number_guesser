import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const BodyText = (props) => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);
BodyText.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
