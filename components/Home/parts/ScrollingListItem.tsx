import { Text, View } from "@/components/Themed"
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Touchable, TouchableOpacity } from "react-native"

const ScrollingListItem = ({ imageUri, id }:any) => {
    return (
      <View style={styles.item}>
        <View style={styles.imageView}>
            <Link asChild href={`/thekeep/${id}`}>
                <Image source={{ uri: imageUri }} style={styles.image} />
            </Link>
        </View>
        {/* <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
        </View> */}
      </View>
    );
  };
  
  export default ScrollingListItem;



const styles = StyleSheet.create({
    item: {
  
    //   borderWidth: 3,
    //   borderStyle: "solid",
    //   borderColor: "black",

        marginHorizontal: 5,
    //   paddingHorizontal: 8,
    //   paddingTop: 8,
    //   paddingBottom: 0,
    //   marginTop: 12,
    //   marginBottom: 10,

    //   backgroundColor: "#c3841f70",

      height: 225,
      width: 140,
  
    },
  
    titleView: {
        backgroundColor: "#c3841f3b",

    },
  
    title: {
      textAlign: "center",
  
      maxWidth: 200,
      height: 32,
  
      fontSize: 20,
      fontWeight: "600",
  
      paddingBottom: 32,
      marginBottom: 5,
      
      borderWidth: 2,
      borderRadius: 5,
      borderStyle: "solid",
      borderColor: "brown",
  
      overflow: "hidden",
  
    },
  
    imageView: {
        flex: 2,
        // backgroundColor: "#c3841f3b",

        borderWidth: 1,
        borderRadius: 2,
        borderStyle: "solid",
        borderColor: "black",
    
    
        height: 250,
        width: 140,
    },
  
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover'
    },
  
  });