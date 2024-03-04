import React from 'react';
import Card from './Card';
import { ActivityIndicator, ScrollView, View } from 'react-native';


const CardsList = ({ eventos }) => {
    return (
      <ScrollView style={{marginVertical:"auto"}}>
        {
          eventos?.length === 0 && <ActivityIndicator size="large" color="#0000ff"/>
        }
        <View style={{alignItems: "center"}}>
          {eventos?.map((item) => (
            <Card key={item.id} evento={item} />
          ))}
        </View>
      </ScrollView>
    );
}

export default CardsList;