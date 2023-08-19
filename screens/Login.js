import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const devicewidth = Dimensions.get("screen").width;





function Login()
{
    const [pressed, setpressed]= useState(true);

    return (
        <LinearGradient
          colors={["#000000", "#000000", "#34A853"]}
          style={styles.container}
        >
          <View style={styles.logout}>
            <MaterialCommunityIcons
              name="music-clef-treble"
              size={devicewidth > 360 ? 100 : 70}
              color="white"
            />
            <Text style={styles.musictxt}>
            JINGLE
            </Text>
            <StatusBar style="light" />
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={styles.maintxt}
            >
              <Fontisto
                name="person"
                size={24}
                color="#DDEBE5"
                style={{ marginLeft: 10 }}
              />
              <TextInput
                style={styles.lowertext}
                placeholder=" Email"
                placeholderTextColor={"#DDEBE5"}
              />
            </View>
            <View
              style={styles.layer1}
            >
              <FontAwesome5
                name="lock"
                size={24}
                color="white"
                style={{ marginLeft: 10 }}
              />
              <TextInput
                style={{
                  height: 40,
                  width: "70%",
                  color: "#DDEBE5",
                  marginLeft: 4,
                }}
                placeholder=" Password"
                placeholderTextColor={"#DDEBE5"}
                secureTextEntry={true}
              />
              <TouchableOpacity onPress={()=>setpressed(!pressed)}>
              <Ionicons name= {(pressed===false) ? "eye":"eye-off"} size={24} color="white" style={{marginLeft:10}}/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                width: "68%",
                alignItems: "flex-end",
                marginTop: devicewidth / 35,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  textAlign: "right",
                  width: "65%",
                }}
              >
                Forget your Password?
              </Text>
            </TouchableOpacity>
            <View
              style={{
                margin: devicewidth / 11,
                height: 40,
                width: "100%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 40,
                  width: "70%",
                  backgroundColor: "#0EC779",
                  borderRadius: 7,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontSize: devicewidth > 360 ? 15 : 14,
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: -12,
                height: 40,
                width: "100%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 40,
                  width: "70%",
                  backgroundColor: "black",
                  borderRadius: 7,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: devicewidth > 360 ? 14 : 13,
                    }}
                  >
                    Don't have an account? create now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "80%",
                height: 1,
                backgroundColor: "#DDEBE5",
                marginTop: 12,
              }}
            />
            <Text style={{ color: "#DDEBE5", fontSize: 15, marginTop: 12 }}>
              OR
            </Text>
            <View style={{ flexDirection: "row", marginHorizontal: 12 }}>
              <View style={{ margin: 12 }}>
                <TouchableOpacity>
                  <FontAwesome
                    name="google-plus-square"
                    size={40}
                    color="#DDEBE5"
                  />
                </TouchableOpacity>
              </View>
              <View style={{ margin: 12 }}>
                <TouchableOpacity>
                  <FontAwesome name="facebook-square" size={40} color="#DDEBE5" />
                </TouchableOpacity>
              </View>
              <View style={{ margin: 12 }}>
                <TouchableOpacity>
                  <FontAwesome name="twitter-square" size={40} color="#DDEBE5" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      );
    }

    export default Login;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        logout: {
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          marginTop: devicewidth > 360 ? devicewidth / 4 : devicewidth / 7,
        },
        musictxt:{ 
            color: "#DDEBE5", 
            fontSize: 14, 
            fontWeight: "bold" 
        },
        maintxt:{
            alignItems: "center",
            marginTop: devicewidth / 11,
            borderWidth: 1,
            borderRadius: 7,
            borderColor: "#DDEBE5",
            flexDirection: "row",
            width: "70%",
          },
          lowertext:{
            height: 40,
            width: "70%",
            color: "#DDEBE5",
            marginLeft: 4,
          },
          layer1:{
            alignItems: "center",
            marginTop: devicewidth / 11,
            borderWidth: 1,
            borderRadius: 7,
            borderColor: "#DDEBE5",
            flexDirection: "row",
            width: "70%",
          },

      });
