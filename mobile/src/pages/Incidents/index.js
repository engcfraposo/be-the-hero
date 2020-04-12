import React, {useState, useEffect} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import logoImg from '../../assets/logo.png'
import api from '../../services/Api'
import styles from './styles'

export default function Incidents() {

    const [incidents, setIncidents] = useState();  
    const navigation = useNavigation();

    function navigateToDetail(){
      navigation.navigate('Detail');
    }

    async function loadIncidents(){
        const response = await api.get('incidents')

        setIncidents(response.data);
    }

    useEffect(() => {
      loadIncidents()
    }, [])
      
    return ( 
                   
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
          <Text style={styles.headerText}>
            Total de <Text className={styles.headerTextBold}>0 casos</Text>
          </Text>   
        </View>
          <Text style={styles.title}>Bem-vindo!</Text>   
          <Text style={styles.description}>Escolha um dos casos e salve o dia.</Text>   
          
          <FlatList
          style={styles.incidentsList} 
          keyExtractor={ incident => String(incident.id)}
          data={incidents}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: incident }) => ( 
            <View style={styles.incidents}>
            <Text style={styles.incidentsProperty}>ONG:</Text>
            <Text style={styles.incidentsValue}>{incident.name}</Text>

            <Text style={styles.incidentsProperty}>CASO:</Text>
            <Text style={styles.incidentsValue}>{incident.title}</Text>

            <Text style={styles.incidentsProperty}>VALOR:</Text>
            <Text style={styles.incidentsValue}>{incident.value}</Text>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={navigateToDetail}>

              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041"/>

            </TouchableOpacity>
          </View>

          )}/>
          
          
         
        </View>
      
        
    );
  }