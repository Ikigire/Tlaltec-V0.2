import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useAppContext } from '../../../Contexts/App.context';
import Cards from '../../../../src/components/Cards';

export default function AlertasActualesScreen({navigation}) {
    const { huerto } = useAppContext();
    const [alertas, setAlertas] = useState<string[]>([]);

    useEffect(() => {
        setAlertas(['Antracnosis', 'Gusano telarañero o Enrollador de Hoja']);
    }, [])

    return (
        <View>
            <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 20, marginBottom: 10 }}>{alertas.length ? 'Su huerto sufre de:' : 'Su huerto está seguro'}</Text>

            <ScrollView scrollEventThrottle={10}>
                <View style={{ marginTop: 8 }}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        {alertas.length > 0 && alertas.map((alerta, index) => (
                            <View key={index} style={{ marginHorizontal: 20 }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('GravedadScreen', { diagnosis: alerta }) }}>
                                    <Cards
                                        imageUri={require("../../../../src/assets/images/LogoTlaltec2.png")}
                                        name={alerta}
                                        lvlRisk='Poco Impacto'
                                    />
                                </TouchableOpacity>
                            </View>
                        ))}

                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}
