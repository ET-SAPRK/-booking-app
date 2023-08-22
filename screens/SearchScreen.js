import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React ,{useEffect, useState} from "react";
import { Feather } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";

const SearchScreen = () => {
  const [input,setInput] = useState("");
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor:"#FFC72C",
          borderWidth:4,
          borderRadius:10,
          marginTop:30,
          marginLeft:10,
          marginRight:10,
          marginBottom:10,
        }}
      >
         <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder="Enter Your Destination" />
         <Feather name="search" size={22} color="black" />
      </View>
      {/* <SearchResults data={data} input={input} setInput={setInput}/> */}
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})