import { StyleSheet } from 'react-native';

const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "start",
    justifyContent: "space-between",
    margin: 70,
    flexDirection: "row",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity:0.7,
    width: '100%',
    height: '100%'
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 100,
    backgroundColor: "#228B22",
    alignSelf: "start",
    alignItems: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: 40,
    height: 40,
    minWidth: 35,
    minheight: 35,
    textAlign: "center",
    borderRadius: 20,
  },
  text: {
    color: "#228B22", 
    fontSize: 40,
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
  }
});

export default quizStyles;