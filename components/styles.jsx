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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 3,
  }
});

export default styles;
