import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
Card.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
