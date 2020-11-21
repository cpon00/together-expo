import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  default: {
    flex: 1
  },
  content: {
    backgroundColor: "#fff9d6",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  posts: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  username: {
    fontWeight: "bold",
    fontFamily: "AppleSDGothicNeo-Light",
    textAlign: "center",
    paddingBottom: 3,
  },
  title: {
    fontFamily: "AppleSDGothicNeo-Light",
    fontSize: 20,
    letterSpacing: 6,
  },
  captions: {
    fontFamily: "AppleSDGothicNeo-Light",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  comments: {
    fontFamily: "AppleSDGothicNeo-Light",
    color: "grey",
    paddingLeft: 15,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgrey",
  }
});

export default styles;
