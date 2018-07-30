import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#283747",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    margin: 10
  },

  textButton: {
    color: "#17202A",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 10
  },

  buttonAdd: {
    alignSelf: "center",
    borderColor: "#1C2833",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#F4F6F7"
  },

  textInput: {
    width: "90%",
    height: 50,
    borderColor: "#1C2833",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#F4F6F7"
  },
  flatview: {
    justifyContent: "center",
    paddingTop: 10,
    borderRadius: 2
  },

  list: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#F4F6F7",
    borderRadius: 4,
    margin: 10
  },

  item: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-around",
    color: "#17202A",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5
  },

  deleteIcon: {
    width: 20,
    height: 20,
    margin: 10
  }
});
