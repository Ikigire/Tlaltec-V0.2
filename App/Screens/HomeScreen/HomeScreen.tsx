import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../Constants/Color'
import Cards from '../../../src/components/Cards'
import { PoppinsSemiBold } from '../../../src/assets/styles/Typography';
import { useAppContext } from '../../Contexts/App.context';
import { getHuertosByIdUser } from '../../../src/servises/huertos/huerto.servises';
import { Huertos, HuertosList } from '../../../src/servises/huertos/models/huerto.models';
import HuertosCards from '../../../src/components/HuertosCards';


const HomeScreen = ({ navigation }) => {
  const [results, setResults] = useState<Huertos[]>([]);
  const { token, usuario, setToken, refreshHuerto, setRefreshHuerto, setHuerto } = useAppContext()

  useEffect(() => {
    getHuertosByIdUser(usuario._id, token)
      .then((response) => {
        if (response.status != 200) {
          throw new Error('No se encontraron huertos registrados');
        }
        return response.json();
      })
      .then((resposeJson) => {
        const response = resposeJson as HuertosList;
        // Handle successful login
        setResults(response.huertos);
        // Guardando el token de la sesión
        setToken(response.token);

        navigation.navigate('HomeScreen');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });

  }, [])

  useEffect(() => {
    if (refreshHuerto == true) {
      getHuertosByIdUser(usuario._id, token)
        .then((response) => {
          if (response.status != 200) {
            throw new Error('No se encontraron huertos registrados');
          }
          return response.json();
        })
        .then((resposeJson) => {
          const response = resposeJson as HuertosList;
          // Handle successful login
          setResults(response.huertos);
          // Guardando el token de la sesión
          setToken(response.token);
          setRefreshHuerto(false)
          navigation.navigate('HomeScreen');
        })
        .catch((error) => {
          Alert.alert('Error', error.message);
          setRefreshHuerto(false)
        });
    }
  }, [refreshHuerto])
  return (
    <SafeAreaView style={styles.Container}>
      <View style={{ flex: 1, marginHorizontal: 22, justifyContent: "space-between" }}>
        <View style={{ marginTop: 56, marginBottom: 10 }}>
          <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 24, marginBottom: 10 }}>TlalTec</Text>

          {/* <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={[{ color: "#ffffff" }, styles.buttonText]} >Escanea Una Enfermedad</Text>
          </TouchableOpacity> */}

        </View>
        {/* <Image source={require("../")}/> */}
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 8 }}>
            <ScrollView scrollEventThrottle={16}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontFamily: "Poppins_500Medium" }}>Enfermedades Recientes</Text>
              </View>

              <View style={{ height: 130, marginTop: 8 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                  <Cards imageUri={require("../../../src/assets/images/LogoTlaltec2.png")} name="Roña" lvlRisk='Poco Impacto' />
                  <Cards imageUri={require("../../../src/assets/images/nameLogo.png")} name="Trips" lvlRisk='Alto Impacto' />
                  <Cards imageUri={require("../../../src/assets/images/LogoTlaltec2.png")} name="Roña" lvlRisk='Poco Impacto' />
                  <Cards imageUri={require("../../../src/assets/images/nameLogo.png")} name="Trips" lvlRisk='Alto Impacto' />
                  <Cards imageUri={require("../../../src/assets/images/LogoTlaltec2.png")} name="algo" lvlRisk='Bajo Impacto' />
                </ScrollView>
              </View>
            </ScrollView>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 18, fontFamily: "Poppins_500Medium" }}>Huertos</Text>
          </View>

          <ScrollView scrollEventThrottle={10}>
            <View style={{ marginTop: 8 }}>
              <ScrollView showsVerticalScrollIndicator={false} >

                {results.length > 0 && results.map((huerto, index) => (
                  <View key={index} style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={() => {setHuerto(huerto); navigation.navigate('DetalleHuertoScreen', { huerto });}}>
                      <HuertosCards
                        imageTemp={require("../../../src/assets/icons/humedad.png")}
                        imageHmdd={require("../../../src/assets/icons/termometro.png")}
                        huerto={huerto}
                      />
                    </TouchableOpacity>
                  </View>
                ))}

              </ScrollView>
            </View>
          </ScrollView>
        </View>

        {/* <TouchableOpacity style={styles.floatingButton} onPress={()=>navigation.navigate("AddHuertos")}>
            <Image source={require('../../../src/assets/icons/sign.png')} style={styles.addButtonImage} />
          </TouchableOpacity> */}

        <TouchableOpacity style={styles.floatingTextButton} onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium", textAlign: 'center' }}>+Agregar Huerto</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "white",
  },
  textAlt: {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 10,
    marginBottom: 16,
    marginTop: 24,
    color: COLORS.gray3
  },
  logIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 83,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray2,

  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.gray2,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingTextButton: {
    position: 'absolute',
    bottom: 6,
    right: 10,
    backgroundColor: COLORS.gray2,
    borderRadius: 30,
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonImage: {
    width: 50,
    height: 50,
    margin: 10,

  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "#1E232C",
  },
  loginAltButton: {
    backgroundColor: "#ffffff",
    borderColor: "#1E232C",
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: PoppinsSemiBold,
    fontSize: 16,
  },
})
