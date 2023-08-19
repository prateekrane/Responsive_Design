import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const devicewidth=Dimensions.get("window").width;

function Welcome(){
    // console.log(devicewidth);
    return(
        <LinearGradient
          colors={["#000000", "#000000", "#34A853"]}
          style={styles.container}
        >
           <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
           <MaterialCommunityIcons
              name="music-clef-treble"
              size={devicewidth > 360 ? 200 : 150}
              color="white"
            />
            <View>
                <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>JINGLE</Text>
            </View>
           </View>
        </LinearGradient>
    );
    
}

export default Welcome;
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})