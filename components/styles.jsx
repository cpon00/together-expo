import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  default: {
    flex: 1
  },
  content: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topNavigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 16,

  },
  communities: {
    width: 180,
    height: 220,
    borderWidth: 2,
    borderColor: "red",
    resizeMode: "contain",
    margin: 4,

  }
});

export default styles;
