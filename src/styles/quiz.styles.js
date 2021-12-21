import { StyleSheet } from 'react-native';

const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // opacity:0.7,
    width: '100%',
    height: '100%'
  },
  view2: {
    flex: 5,
    width: '100%',
    backgroundColor:'green',
  },
  view3: {
    flex: 5,
    width: '100%',
    backgroundColor:'red',
  },
  view4: {
    flex: 1,
    width: '100%',
    backgroundColor:'yellow',
  }
});

export default quizStyles;