import { Text, View } from "../Themed"
import { StyleSheet, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getKeep, getKeepSimple } from "@/managers/keepManager";
import { SimpleBookObj } from "@/types/KeepTypes";
import ScrollingListItem from "./parts/ScrollingListItem";

export const HomePage = () => {

  const [keep, setKeep] = useState<Array<SimpleBookObj>>([])

  useEffect(() => {
    getKeepSimple().then(setKeep)
    console.log(process.env.REACT_APP_API_BASE_URL)
  }, [])

  return (
    <View>
      <ScrollView scrollEventThrottle={16}>

        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            Featured
          </Text>
        </View>

        <View style={styles.list}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {keep.map((k, i) => {
              return (
                <ScrollingListItem key={i} imageUri={k.imageUrl} id={k.id} />
              );
            })}
          </ScrollView>
        </View>

      </ScrollView>

      <ScrollView scrollEventThrottle={16}>

        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            Friend's Library
          </Text>
        </View>

        <View style={styles.list}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {keep.map((k, i) => {
              return (
                <ScrollingListItem key={i} imageUri={k.imageUrl} id={k.id} />
              );
            })}
          </ScrollView>
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

  main: {
    marginLeft: 500
  },

  headerContainer: {
    marginLeft: 10,
  },

  header: {
    fontWeight: 700,
    fontSize: 24,
  },

  list: {

    height: 235,
    width: 350,

    // borderWidth: 5,
    // borderStyle: "solid",
    // borderColor: "black",

    marginHorizontal: 10,
    paddingVertical: 5,
    paddingLeft: 0,

    // backgroundColor: "#c3841f3b"
  },

}); //YYYYYYYYYYYYYYYYYYYYYYYYAAAAAAAAAAAAAAAAAAAAAAAAAYYYYYYYYYYYYYYYYYYYYYYYYYY