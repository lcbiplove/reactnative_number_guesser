import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const TitleText = (props) => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);
TitleText.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default TitleText;
