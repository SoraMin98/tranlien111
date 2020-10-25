import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
//import { Ionicons } from "";
//import Swipeout from 'react-native-swipeout';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {
    width: 80,
    height: 70,
    //borderRadius: 20,
    marginRight: 10
    
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3a3a3a"
  },
  subtitle: {
    color: "#666",
    fontSize: 12,
    marginTop: 2,
    marginRight: 2
  },
  separator: {
    backgroundColor: "#ececec",
    height: 1
  },
  right: {
    alignItems: "flex-end",
    flex: 1
  }
});
// const SwipeSettinng={
//   autoClose:true,
//   onclose:()=>{

  
//   },
//   onOpen:()=>{

//   },
//   right:[
//     {
//       onPress:()=>{},
//       text:'Delete',type :'delete'
//     }
//   ]
// }
export const Row = ({ image, title, subtitle, onPress }) => (

  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View>
      <Image source={image} style={styles.image} />
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <View style={styles.right}>
    
    </View>
  </TouchableOpacity>
  
);

export const Separator = () => <View style={styles.separator} />;