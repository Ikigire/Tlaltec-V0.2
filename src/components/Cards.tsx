import { StyleSheet, Text, View, Image } from "react-native";
import React, { Component } from "react";
import COLORS from "../../App/Constants/Color";

type Props = {
  name: string;
  lvlRisk: string;
  imageUri: any;
};

class Cards extends Component<Props>{
  render(){
    return (
        <View
          style={{
            height: 120,
            marginBottom: 20,
            marginHorizontal: 5,
            borderColor: COLORS.gray,
            backgroundColor: "#F8F8F8",
            borderRadius: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            shadowColor: COLORS.gray, 
            shadowOpacity: 0.8, 
            shadowRadius: 5, 
            shadowOffset: {
              width: 0,
              height: 0,
            },
            elevation: 5, // Elevación para que la sombra se vea en Android
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{textAlign: "left", marginStart: 12, fontFamily: "Poppins_500Medium", fontSize: 12, color: COLORS.green, marginBottom:-5}}>
                {this.props.lvlRisk}
            </Text>
            <Text style={{textAlign: "left", marginStart: 12, fontFamily: "Poppins_700Bold", fontSize:16, color: COLORS.dark2}}>
                {this.props.name}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center"}}>
            <Image
              source={this.props.imageUri}
              style={{ width: 90, height: 90, resizeMode: "contain" }}
            />
          </View>
        </View>
      );
  }
};

export default Cards;

const styles = StyleSheet.create({});
