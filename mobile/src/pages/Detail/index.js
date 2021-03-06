import React from 'react'
import {View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as Mailcomposer from 'expo-mail-composer'


import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Detail() {

  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl
    .NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
    .format(incident.value)}`;

    function navigateToBack(){
      navigation.navigate('Incidents');
    }

    function sendEmail(){
      Mailcomposer.composeAsync({
        subject: `Herói do caso: ${incident.title}`,
        recipients: [incident.email],
        body: message
      })
    }

    function sendWhatsapp(){
      Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
          <TouchableOpacity 
          onPress={navigateToBack}
          style={styles.detailsButton} 
          >
            <Feather name="arrow-left" size={28} color="#e02041"/>
          </TouchableOpacity>
        </View>

        <View style={styles.incidents}>
            <Text style={[styles.incidentsProperty, {marginTop: 0}]}>ONG:</Text>
            <Text style={styles.incidentsValue}>{incident.name} de {incident.city}/{incident.uf} </Text>

            <Text style={styles.incidentsProperty}>CASO:</Text>
            <Text style={styles.incidentsValue}>{incident.title}</Text>

            <Text style={styles.incidentsProperty}>VALOR:</Text>
            <Text style={styles.incidentsValue}>{Intl
              .NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
              .format(incident.value)}
            </Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

          <Text style={styles.heroDescription}>Entre em contato:</Text>
        

          <View style={styles.actions}>
            <TouchableOpacity 
              onPress={sendWhatsapp}
              style={styles.action} 
            >
                <Text style={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={sendEmail}
              style={styles.action} 
            >
                <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
       </View>

      </View>

    );
  }