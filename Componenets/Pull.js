import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Pull = () => {
  const initdata = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Amit2" },
    { id: 3, name: "Amit3" },
  ];
  const [refresh, setrefresh] = useState(false);
  const [data, newdata] = useState(initdata);
  const Refresh = () => {
    setrefresh(true);
    const datag = [
      {
        id: Math.floor(Math.random() * 10000),
        name: Math.floor(Math.random() * 10000)
      },...data,];
    setTimeout(() => {
      newdata(datag);
      setrefresh(false);
    }, 2000);
  };
  return (
    <View style={styles.text}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={{fontSize:80}}>{item.name}</Text>}
        onRefresh={Refresh}
        refreshing={refresh}
      />
    </View>
  );
};

export default Pull;

const styles = StyleSheet.create({
    text:{
        marginTop:30,
        alignItems:"center"
    }
});
