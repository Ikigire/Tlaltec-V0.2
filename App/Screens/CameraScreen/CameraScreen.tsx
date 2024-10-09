import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {Camera, CameraType, FlashMode} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CameraBackButton from '../../../src/components/CameraB';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Navigation from '../../Navigation';
import IcoBottonTL from '../../../src/components/IcoBottonTL';



const CameraScreen = ({navigation}) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const cameraRef = useRef(null);
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  },[]);
  
  if (hasCameraPermission === false){
    return <Text>Sin acceso a la camara</Text>
  }

  const tomarFoto = async () => {
    if(cameraRef){
      try {
        const datosImg = await cameraRef.current.takePictureAsync();
        console.log(datosImg);
        setImage(datosImg.uri);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const toggleFlash = () => {
    setFlash(flash === FlashMode.off ? FlashMode.torch : FlashMode.off);
  }

  const toggleCamera = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }

  

  const openImagePicker = async () => {
    // const { status } = await MediaLibrary.requestPermissionsAsync();
    // if (status === 'granted') {
    //   const result = await MediaLibrary.getAssetsAsync();
    //   console.log(result);
    // } else {
    //   // Permiso denegado
    // }
  };


  return (
    <View style={styles.container}>
      {/* Verifico si tomo una foto  */}
      {image ? ( 
        // Si ya se tomo, muestro la foto
        <View style={styles.showImage}>
          <Image source={{uri: image}} style={{width: width, height: height}} />
          
        </View>
      ) : ( 
        // Si no se tomo muestro la ui normal
        <Camera
          style={[styles.camer, {aspectRatio: 3/4}]}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View style={styles.settings}>
            <IcoBottonTL
              onPress={toggleFlash}
              iconSource={flash === FlashMode.off 
                ? 
                  require("../../../src/assets/icons/flash_Off.png") 
                : 
                  require("../../../src/assets/icons/flash.png")}
            />
            <Text style={{color: "#fff", fontSize: 16, fontFamily: "Poppins_700Bold"}}>Enfoque un aguacate</Text>
            <IcoBottonTL
                onPress={()=>navigation.navigate("HomeScreen")}
                iconSource={require("../../../src/assets/icons/add.png")}
            />
          </View>
        </Camera>
      )}
      {!image ? (
          <View style={{position: 'absolute', width: width/2, height: height/1.5}}>
            <Image source={require("../../../src/assets/icons/scan.png")}/>
          </View>
        ) : <></>}

      {/* Muestro solo si no hay una imagen capturada */}
      {!image && ( 
        <View style={{width:"100%",position: 'absolute', paddingBottom: 70, display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: "10%"}}>
          <IcoBottonTL onPress={openImagePicker} iconSource={require("../../../src/assets/icons/selecImage.png")}/>
          <IcoBottonTL onPress={tomarFoto} iconSource={require("../../../src/assets/icons/Camera.png")} iconSize={70}/>
          <IcoBottonTL onPress={toggleCamera} iconSource={require("../../../src/assets/icons/reverse.png")} iconSize={38}/>
        </View>
      )}
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    
  },
  camer:{
    flex: 1,
    borderRadius: 100,
    
  },
  icon:{
    width: 34,
    height: 34,
  },
  settings:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 150,
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)", 
  },
  showImage:{

  }
});

export default CameraScreen

