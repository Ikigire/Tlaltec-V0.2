import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Alert, ScrollView } from 'react-native'
import { PoppinsSemiBold } from '../../../../src/assets/styles/Typography'
import COLORS from '../../../Constants/Color'

export default function ToolsScreen({ navigation }) {
    return (
        <View>
            <View style={{}}>
                <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 20, marginBottom: 10 }}>Herramientas</Text>

                <ScrollView scrollEventThrottle={10}>
                    <View style={{ marginTop: 8 }}>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => Alert.alert("Análisis de imágenes", 'Función que activa la cámara para analizar las enfermedades del aguacate')}>
                                <Text style={[{ color: "#ffffff" }, styles.buttonText]} >Escanea Una Enfermedad</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button, styles.loginButton, { marginTop: 25 }]} onPress={() => navigation.navigate('AllDiagnostics')}>
                                <Text style={[{ color: "#ffffff" }, styles.buttonText]} >Sistema Experto de Diagnóstico</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

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
