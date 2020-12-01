import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    flexGrow: 1,
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    height: '10%',
    width: '90%',
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    // backgroundColor: "#fff9d6",
    backgroundColor: "white",
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
    fontFamily: "HelveticaNeue-Light",
    textAlign: "center",
    paddingBottom: 3,
  },
  title: {
    fontFamily: "HelveticaNeue-Light",
    fontSize: 20,
    letterSpacing: 6,
  },
  captions: {
    fontFamily: "HelveticaNeue-Light",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },

  topNavigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 16,

  },
  communities: {
    borderRadius: 10,
    flexGrow: 1,
    width: 100,
    height: 200,
    borderWidth: 2,
    resizeMode: "cover",
    margin: 5,
    justifyContent: 'center'
  },

  comments: {
    fontFamily: "HelveticaNeue-Light",
    color: "grey",
    paddingLeft: 15,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgrey"
  }
});

export default styles;
