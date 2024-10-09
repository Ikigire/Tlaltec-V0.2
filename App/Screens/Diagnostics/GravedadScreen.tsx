import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import { useState, useContext } from 'react';
import CheckBox from 'react-native-check-box'
import COLORS from '../../Constants/Color';
import BackButton from '../../../src/components/BackButton';
import { ResultContextProvider } from './ResultContext';
import React from 'react';

const GravedadScreen = ({navigation, route }) => {
  const { diagnosis } = route.params;
  //opciones areas
  const [Organico, setOrganico] = useState(false);
  const [EtapaFeno, setEtapaFeno] = useState(false);

  //opciones Nivel Infestacion
  const [Medio, setMedio] = useState(false);
  const [Alto, setAlto] = useState(false);

  //opciones Etapa Fenologica
  const [FlujoVege, setFlujoVege] = useState(false);
  const [DesaFloral, setDesaFloral] = useState(false);
  const [Amarre, setAmarre] = useState(false);
  const [CresFruto, setCresFruto] = useState(false);
  const [Cosecha, setCosecha] = useState(false);

  return (
    
    <SafeAreaView style={styles.Container}>
      <View style={{ marginHorizontal: 22, justifyContent: "space-between"}}>        
        <View style={{flexDirection: "row", marginTop: 40, marginBottom: 12}}>
          
          <BackButton onPress={()=>{navigation.navigate("HomeScreen")}} />

        </View>

        <View>
        <Text style={{fontSize: 22, fontFamily:"Poppins_500Medium"}}>{diagnosis}</Text>
          <Text style={{fontSize: 14, fontFamily:"Poppins_500Medium"}}>Seleccione la opción a modificar</Text>
          <Text style={{fontSize: 14, fontFamily:"Poppins_500Medium"}}>Seleccione campos obligatorios marcados con *</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={{flex: 1, padding: 10}}
              onClick={() => setOrganico(!Organico)}
              isChecked={Organico}
              rightText={"Cultivo orgánico"}
            />
            <CheckBox
              style={{flex: 1, padding: 10}}
              onClick={() => setEtapaFeno(!EtapaFeno)}
              isChecked={EtapaFeno}
              rightText={"*Etapa fenológica"}
            />
          </View>
        </View>
      </View>

      
        <View style={{flex: 1, marginHorizontal: 22, justifyContent: "space-between"}}>
          <View>
              
            <ScrollView scrollEventThrottle={1}>
              <View style={styles.Container}>

                
                <View style={styles.ContainerBackground}>
                  {EtapaFeno && (

                    <View style={{ marginTop: 10}}> 
                      <Text>    Etapa Fenológica</Text> 

                      <View style={styles.checkboxContainer}>
                        <CheckBox
                          style={{flex: 1, padding: 10}}
                          onClick={() => setFlujoVege(!FlujoVege)}
                          isChecked={FlujoVege}
                          rightText={"Flujo Vegetativo"}
                        />
                        <CheckBox
                          style={{flex: 1, padding: 10}}
                          onClick={() => setDesaFloral(!DesaFloral)}
                          isChecked={DesaFloral}
                          rightText={"Desarrollo Floral"}
                        />
                      </View>

                      <View style={styles.checkboxContainer}>
                        <CheckBox
                          style={{flex: 1, padding: 10}}
                          onClick={() => setAmarre(!Amarre)}
                          isChecked={Amarre}
                          rightText={"Amarre"}
                        />
                        <CheckBox
                          style={{flex: 1, padding: 10}}
                          onClick={() => setCresFruto(!CresFruto)}
                          isChecked={CresFruto}
                          rightText={"Crecimiento del Fruto"}
                        />
                      </View>

                      <View style={styles.checkboxContainer}>
                        <CheckBox
                          style={{flex: 1, padding: 10}}
                          onClick={() => setCosecha(!Cosecha)}
                          isChecked={Cosecha}
                          rightText={"Cosecha"}
                        />
                      </View>

                    </View>
                  
                  )}
                </View>

                <View style={styles.ContainerBackground}>
                  {(FlujoVege || DesaFloral || Amarre || CresFruto || Cosecha) &&  (
                    <View style={{ marginTop: 10}}> 
                      <Text>    Nivel de Infestación</Text> 
                      <View style={styles.checkboxContainer}>
                        
                        <CheckBox
                          style={{flex: 1, padding: 10}}
                          onClick={() => setMedio(!Medio)}
                          isChecked={Medio}
                          rightText={"Moderado"}
                        />
                        <CheckBox
                          style={{flex: 1,padding: 10}}
                          onClick={() => setAlto(!Alto)}
                          isChecked={Alto}
                          rightText={"Critico"}
                        />
                      </View>

                      <View >
                        {(diagnosis === 'Trips' || diagnosis === 'Araña roja' || 
                        diagnosis === 'Araña blanca, cristalina o telarañera' || diagnosis === 'Mosca ovario') &&  (FlujoVege || DesaFloral) &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 10 (presencia moderada) {'\n'}    * Número de insectos mayor a 10 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>
                      <View >
                        {diagnosis === 'Trips' &&  (Amarre || CresFruto || Cosecha) &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 5 (presencia moderada) {'\n'}    * Número de insectos mayor a 5 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>

                      <View >
                        {diagnosis === 'Araña roja' &&  (Amarre || CresFruto || Cosecha) &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 2 (presencia moderada) {'\n'}    * Número de insectos mayor a 2 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>

                      <View >
                        {(diagnosis === 'Gusano telarañero o enrollador de hoja' || diagnosis === 'Gallina ciega') &&  (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 10 (presencia moderada) {'\n'}    * Número de insectos mayor a 10 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>

                      <View >
                        {diagnosis === 'Araña blanca, cristalina o telarañera' &&  (Amarre || CresFruto || Cosecha) &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 2 (presencia moderada) {'\n'}    * Número de insectos mayor a 2 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>

                      <View >
                        {diagnosis === 'Mosca ovario' &&  Amarre  &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 2 (presencia moderada) {'\n'}    * Número de insectos mayor a 2 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>
                      <View >
                        {diagnosis === 'Mosca ovario' &&  (CresFruto || Cosecha) &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 5 (presencia moderada) {'\n'}    * Número de insectos mayor a 5 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>

                      <View >
                        {diagnosis === 'Hormigas atta' &&  FlujoVege &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 2 (presencia moderada) {'\n'}    * Número de insectos mayor a 2 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>
                      <View >
                        {diagnosis === 'Hormigas atta' &&  ( DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 10 (presencia moderada) {'\n'}    * Número de insectos mayor a 10 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>

                      <View >
                        {diagnosis === 'Ambrosiales' &&  (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                          <View> 
                            <Text>    * Número de insectos 1 a 15 (presencia moderada) {'\n'}     * Número de insectos mayor a 15 (presencia critica)</Text> 
                          </View>
                        )}
                      </View>
                      
                      <View >
                        {(diagnosis === 'Roña' || diagnosis === 'Cáncer o cancro' || diagnosis === 'Tristeza del aguacatero' ||
                          diagnosis === 'Pudrición del cuello y raíz' || diagnosis === 'Fumagina' || diagnosis === 'Antracnosis' ||
                          diagnosis === 'Viroide' || diagnosis === 'Anillamiento de pedúnculo') &&  (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                          <View> 
                            <Text>    * 1 a 2 arboles infestados (presencia moderada) {'\n'}    * Mayor a 2 arboles infestados (presencia critica)</Text> 
                          </View>
                        )}
                      </View>

                      <View style={{marginBottom:10}}></View>

                    </View>
                  )}
                </View>
                
                

              </View>
              
              

              <View style={{ marginTop: 16}}>
                <Text style={{ fontSize: 18, marginBottom: 16 }}>Recomendaciones</Text>
                <Text style={{ marginBottom: 10 }}>Cultural</Text>
                <ResultContextProvider>

                  <View style={styles.Container}>
                    {diagnosis === 'Barrenador de pequeño hueso del aguacate' && (
                      <View >
                        <Text>Recolectar los frutos dañados adheridos al árbol o caídos, 
                          quemarlos o enterrarlos en el suelo a una profundidad no menor 
                          a 1 metro con cal para evitar brote de los huevesillos</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Barrenador de tronco y ramas del aguacate' && (
                      <View >
                        <Text>A través de la poda sanitaria. Las ramas podadas deben 
                          ser incineradas para eliminar huevos, larvas y pupas</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Barrenador grande de la semilla del Aguacate' && (
                      <View >
                        <Text>Recolectar los frutos dañados adheridos al 
                          árbol o caídos, quemarlos o enterrarlos en el suelo a una profundidad 
                          no menor a 1 metro con cal para evitar brote de los huevesillos.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Palomilla barrenadora del aguacate (acaro)' && (
                      <View >
                        <Text>Recolectar los frutos dañados adheridos al árbol o caídos, 
                          quemarlos o enterrarlos en el suelo a una profundidad no menor 
                          a 1 metro con cal para evitar brote de los huevesillos.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Trips' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Mantener una buena ventilación de los árboles.  Podas de aclareo para eliminar las partes dañadas. 
                          {'/n'}Mantener un monitoreo permanente con el método de la hoja de papel para determinar su presencia y nivel de infestación. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Araña roja' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>El riego por aspersión a campo abierto, 
                          al igual que los nebulizadores afectan a las poblaciones, 
                          la alta humedad relativa también reduce la incidencia de los ácaros. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Gusano telarañero o enrollador de hoja' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Recoger hojas y frutos afectados ya que si se ve el daño normalmente ella se encuentra en ellos protegida por una seda. 
                          Se encuentran por focos y su distribución es muy lenta y poco persistente, 
                          por lo que el control cultural puede bastar para reducir daños. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Araña Blanca, cristalina o telarañera' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>El riego por aspersión a campo abierto, 
                          al igual que los nebulizadores afectan a las poblaciones, 
                          la alta humedad relativa también reduce la incidencia de los ácaros. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Ambrosiales' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Realizar podas, trituración y quema de partes vegetales dañadas, en árboles que muestren daño evidente, 
                          con la finalidad de destruir las larvas, pupas y adultos dentro de ramas, y evitar la diseminación del patógeno.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Mosca ovario' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Se recomienda eliminar el pasto dentro y en los bordes de los cultivos 
                          y efectuar un buen control de malezas. Colocar trampas pegajosas. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Roña' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Eliminación de frutos afectados y ramas secas. Recolección antes de que el fruto caiga al suelo. 
                          Podas de aclareo, que permitan mayor luminosidad y aireación a los árboles. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Cáncer o Cancro' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Nivelar el suelo mínimo 1 vez al año para evitar depresiones que favorezcan el encharcamiento y/o mejorar el drenaje del terreno.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Tristeza del aguacatero' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Nivelar el suelo mínimo 1 vez al año para evitar depresiones que favorezcan el encharcamiento y/o mejorar el drenaje del terreno.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Pudrición del cuello y raíz' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Nivelar el suelo mínimo 1 vez al año para evitar depresiones que favorezcan el encharcamiento y/o mejorar el drenaje del terreno.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Fumagina' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Podar los brotes y ramas adecuadamente.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Antracnosis' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Mantener la parcela limpia de restos vegetales y frutos caídos para evitar la propagación del hongo. Realizar poda de aclareo para mayor luminosidad y aireación, 
                          eliminando las ramas afectadas y sellando las heridas. En postcosecha, no superar temperaturas de 24 ºC.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Viroide' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Eliminar todas las áreas infestadas, incluyendo árboles.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Anillamiento de pedúnculo' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text></Text>
                      </View>
                    )}
                  </View>

                </ResultContextProvider>
              </View>

              <View style={{ marginTop: 10}}>
                <Text style={{ marginBottom: 10 }}>Biológico</Text>
                <ResultContextProvider>
                  
                  <View style={styles.Container}>
                    {diagnosis === 'Barrenador de pequeño hueso del aguacate' && (
                      <View>
                        <Text>Beauveria bassiana 0.25 –0.50 Kg/ha. {'\n'}Metarhizium anisopliae  0.25 –0.50 Kg/ha.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Barrenador de tronco y ramas del aguacate' && (
                      <View >
                        <Text>Parasitoides, Braconidae (Hymenoptera: Braconidae) 
                          presente de manera natural en huertos de aguacate es un enemigo natural.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Barrenador grande de la semilla del Aguacate' && (
                      <View >
                        <Text>Beauveria bassiana 0.25 –0.50 Kg/ha.  
                        {'\n'}Metarhizium anisopliae  0.25 –0.50 Kg/ha. 
                        {'\n'}Bacillus thuringiensis  0.25 –0.50 Kg/ha.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Palomilla barrenadora del aguacate (acaro)' && (
                      <View >
                        <Text>Larvas de S. catenifer principalmente por Apanteles sp. 
                          Especies del género apanteles. Trichogramma pretiosum Riley, T. 
                          bruni Nagaraja y Trichogrammatoides annulata DeSantis, parasitan 
                          huevos de esta plaga.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Trips' && (Medio || Alto)  && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Argemonina, Berberina, Ricina y α-
                        Terthienil en Dosis: 1 a 5 ml / litro de agua. 
                        {'\n'}Azadiractina dosis 530 L/ha de agua. 
                        {'\n'}Beauveria bassiana 0.25 –0.50 Kg/ha. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Araña roja' && (Medio || Alto)  && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Argemonina, Berberina, Ricina y α-
                        Terthienil en Dosis: 1 a 5 ml / litro de agua. 
                        {'\n'}Beauveria bassiana dosis 0.25 –0.50 Kg/ha. 
                        {'\n'}Geraneol+Citronellol+Nerolidol+Farnesol dosis 1.0 a 1.5 litro/ha. y los insectos de la familia Phytoseiidae.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Gusano telarañero o enrollador de hoja' && (Medio || Alto)  && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Bioinsecticida Bacillus Thuringiensis 3 g/L de agua con pH entre: 5.5 y 6.0 </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Araña Blanca, cristalina o telarañera' && (Medio || Alto)  && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Argemonina, Berberina, Ricina y α-Terthienil en Dosis: 1 a 5 ml / litro de agua. 
                        {'\n'}Beauveria bassiana dosis 0.25 –0.50 Kg/ha. 
                        {'\n'}Geraneol+Citronellol+Nerolidol+Farnesol dosis 1.0 a 1.5 litro/ha. y los insectos de la familia Phytoseiidae.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Mosca ovario' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Aceite vegetal de soya dosis 2 - 4 L/ha </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Hormigas atta' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Beauveria bassiana 0.25 –0.50 Kg/ha.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Gallina ciega' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Metarhi zium aniso liae</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Tristeza del aguacatero' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Trichoderma harzianum dosis 400-800g/ha.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Fumagina' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Extracto de Reynoutria Sachalinensis en Dosis :0.3 L/cil.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Antracnosis' && (Medio || Alto) && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Bacillus subtilis dosis 1.0-3.0 L/Ha. 
                          {'/n'}Extracto de gobernadora (Larrea tridentata) dosis 4.0 - 6.0 L/ha. 
                          {'/n'}Bacillus amyloliquefaciens  dosis 1-2 L/ha.</Text>
                      </View>
                    )}
                  </View>

                </ResultContextProvider>
              </View>

              <View style={{ marginTop: 10}}>
                <Text style={{ marginBottom: 10 }}>Químico</Text>
                <ResultContextProvider>

                  <View style={styles.Container}>
                    {diagnosis === 'Barrenador de pequeño hueso del aguacate' && (
                      <View style={{ marginTop: 10 }}>
                        <Text>Permetrina Dosis 200-300 ml/ 1000L de agua.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Barrenador de tronco y ramas del aguacate' && (
                      <View >
                        <Text>Bacillus thuringiensis y Malatión DOSIS LITROS/HA 250 ml/100 L de agua.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Barrenador grande de la semilla del Aguacate' && (
                      <View >
                        <Text>Permetrina Dosis 200-300 ml/ 1000L de agua.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Palomilla barrenadora del aguacate (acaro)' && (
                      <View >
                        <Text>Permetrina Dosis 200-300 ml/ 1000L de agua.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Trips' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Clorantraniliprol + Lambda-Cyalotrina en Dosis: 200 - 400 ml en 1000L de agua. Tiamethoxam + Permetrina. 
                        {'\n'}Zeta-Cipermetrina en Dosis: 40-45 mL/100 L de agua. 
                        {'\n'}Tiametoxam en Dosis: 0.15-0.20 kg/ha Acetamiprid en Dosis: 150 – 350 mL/1000 L de agua.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Araña roja' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Abamectina en Dosis: 50 – 150 mL / 100 L de agua.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Gusano telarañero o enrollador de hoja' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Clorantraniliprol en Dosis: 100-200 ML / HA. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Araña Blanca, cristalina o telarañera' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Abamectina en Dosis: 50 – 150 mL / 100 L de agua.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Ambrosiales' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Malation 50% CE, Permetrina 33.66% CE, Lambda cyalotrina 6.50 % CE, Tiametoxam + lambda-cyalotrina, Zeta-cipermetrina.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Mosca ovario' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Permetrina Dosis 200-300 ml/ 1000L de agua.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Hormigas atta' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Clorpirifós pueden aplicarse dosis de 0.3 a 0.5 cc por m2 de hormiguero. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Gallina ciega' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>METASAVEM el cual se sugiere aplicar una mezcla líquida hecha con 400 gramos de producto disueltos en 200 litros de agua. </Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Roña' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Benomilo, Oxido  cuproso, Oxicloruro de CU.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Cáncer o Cancro' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>CopperGreen. Ingrediente activo: Oxicloruro de cobre</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Tristeza del aguacater' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Fosetil-AL en Dosis: 0.2-0.4 kg/100 L de agua. 
                          {'/n'}Metalaxil en Dosis: 2 a 5 l/ha. 
                          {'/n'}Fosetil Aluminio en Dosis: 3.5-4.5 Kg/ha.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Pudrición del cuello y raíz' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Ridomil 2E, Ridomil 50w, Ridomil 5G.</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.Container}>
                    {diagnosis === 'Antracnosis' && Alto && !Organico && (FlujoVege || DesaFloral || 
                          Amarre || CresFruto || Cosecha) &&(
                      <View >
                        <Text>Azoxystrobin en Dosis: 0.4-0.5 L/Ha. 
                        {'/n'}Azufre Elemental en Dosis: 200 - 400 g/100 L de agua. 
                        {'/n'}Boscalid + Pyraclostrobin en Dosis: 0.8 kg/ha. 
                        {'/n'}Cyprodinil + Fludioxonil en Dosis: 0.8 - 1.0 kg/ha. 
                        {'/n'}Folpet en Dosis: 150 - 200 gr / 100L. 
                        {'/n'}Hidróxido Cúprico en Dosis: 300 a 400 g/100 lt. de agua. 
                        {'/n'}Hidróxido de cobre en Dosis: 300 a 400 g/100 lt. de agua.</Text>
                      </View>
                    )}
                  </View>

                  <View style={{marginBottom:50}}></View>

                </ResultContextProvider>
              </View>
            </ScrollView>
          </View>

        </View>
    </SafeAreaView>
  )
}

export default GravedadScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "white",
  },
  ContainerBackground: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#D2D2D2",
    borderRadius: 12,
    marginTop:10,
  },
  textAlt: {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
     marginLeft: 10, 
     marginBottom: 16, 
     marginTop: 24,
     color: COLORS.gray3,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  innerContainer: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
  },
})