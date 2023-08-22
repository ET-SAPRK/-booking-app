import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const route = useRoute();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Hulu-Booking",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    })
  },[])
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  return (
    <>
    <View>
      <Header />
      <ScrollView>
      <View
            style={{
              margin: 20,
              borderColor: "#FFC72C",
              borderWidth: 3,
              borderRadius: 6,
            }}
      >
        <Pressable
              onPress={() => navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
        >
           <Feather name="search" size={24} color="black" />
           <TextInput
                placeholderTextColor="black"
                placeholder= "Enter Your Destination"
              />
        </Pressable>
        <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
        >
           <Feather name="calendar" size={24} color="black" />
           <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Select Your Dates"}
                mode={"range"}
              />
        </Pressable>
        <Pressable
              onPress={() => setModalVisibile(!modalVisibile)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
        >
           <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                placeholder=" room •  adults • Children"
              />
        </Pressable>
        <Pressable
              onPress={() => {}}
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#2a52be",
              }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: "500",
              color: "white",
            }}
          >
            Search
          </Text>
        </Pressable>
      </View>
      </ScrollView>
    </View>

    <BottomModal
    swipeThreshold={200}
    onBackdropPress={() => setModalVisibile(!modalVisibile)}
    swipeDirection={["up", "down"]}
    footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}    
    >
     <ModalContent style={{ width: "100%", height: 310 }}>
     <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Pressable
          onPress={() => setRooms(Math.max(1, rooms - 1))}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            borderColor: "#BEBEBE",
            backgroundColor: "#E0E0E0",
          }}
        >
           <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "600",
                paddingHorizontal: 6,
              }}
            >
              -
            </Text>
        </Pressable>
        <Pressable>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "500",
              paddingHorizontal: 6,
            }}
          >
            {rooms}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setRooms((c) => c + 1)}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            borderColor: "#BEBEBE",
            backgroundColor: "#E0E0E0",
          }}
        >
           <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
              paddingHorizontal: 6,
            }}
          >+</Text>
        </Pressable>
      </Pressable>
    </View>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Pressable
          onPress={() => setAdults(Math.max(1, rooms - 1))}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            borderColor: "#BEBEBE",
            backgroundColor: "#E0E0E0",
          }}
        >
           <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "600",
                paddingHorizontal: 6,
              }}
            >
              -
            </Text>
        </Pressable>
        <Pressable>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "500",
              paddingHorizontal: 6,
            }}
          >
            {adults}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setAdults((c) => c + 1)}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            borderColor: "#BEBEBE",
            backgroundColor: "#E0E0E0",
          }}
        >
           <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
              paddingHorizontal: 6,
            }}
          >+</Text>
        </Pressable>
      </Pressable>
    </View>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Pressable
          onPress={() => setChildren(Math.max(1, rooms - 1))}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            borderColor: "#BEBEBE",
            backgroundColor: "#E0E0E0",
          }}
        >
           <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "600",
                paddingHorizontal: 6,
              }}
            >
              -
            </Text>
        </Pressable>
        <Pressable>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "500",
              paddingHorizontal: 6,
            }}
          >
            {children}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setChildren((c) => c + 1)}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            borderColor: "#BEBEBE",
            backgroundColor: "#E0E0E0",
          }}
        >
           <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
              paddingHorizontal: 6,
            }}
          >+</Text>
        </Pressable>
      </Pressable>
    </View>
     </ModalContent>
    </BottomModal>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})