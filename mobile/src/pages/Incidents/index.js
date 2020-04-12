import React, {useState, useEffect} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'


import logoImg from '../../assets/logo.png'
import api from '../../services/Api'
import styles from './styles'

export default function Incidents() {

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1); 
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    
    function navigateToDetail(incident){
      navigation.navigate('Detail', { incident });
    }

    if(loading){
      return;
    }

    if (total > 0 && incidents.length == total){
      return;
    }



    async function loadIncidents(){
        const response = await api.get('incidents',{
        params: { page },}
        );

        setIncidents([...incedents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page +1);
        setLoading(false);
    }

    useEffect(() => {
      loadIncidents()
    }, [])
      
    return ( 
                   
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
          <Text style={styles.headerText}>
            Total de <Text className={styles.headerTextBold}>{total} casos</Text>
          </Text>   
        </View>
          <Text style={styles.title}>Bem-vindo!</Text>   
          <Text style={styles.description}>Escolha um dos casos e salve o dia.</Text>   
          
          <FlatList
          style={styles.incidentsList} 
          keyExtractor={ incident => String(incident.id)}
          data={incidents}
          showsVerticalScrollIndicator={false}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          renderItem={({ item: incident }) => ( 
            <View style={styles.incidents}>
            <Text style={styles.incidentsProperty}>ONG:</Text>
            <Text style={styles.incidentsValue}>{incident.name}</Text>

            <Text style={styles.incidentsProperty}>CASO:</Text>
            <Text style={styles.incidentsValue}>{incident.title}</Text>

            <Text style={styles.incidentsProperty}>VALOR:</Text>
            <Text style={styles.incidentsValue}>
              {Intl
              .NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
              .format(incident.value)}
            </Text>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => navigateToDetail(incident)} >

              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041"/>

            </TouchableOpacity>
          </View>

          )}/>
          
          
         
        </View>
      
        
    );
  }