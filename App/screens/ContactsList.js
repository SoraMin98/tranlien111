import React from 'react';
import { View,FlatList } from 'react-native';

import { Row, Separator } from '../components/Row';
import users from '../data/user';

export default ({ navigation }) => (
  <FlatList
    data={users}
    keyExtractor={item => {
      return `${item.key}`;
    }}
    renderItem={({ item }) => {
      const name = `${item.name}`;

      return (
        <Row
          image={{ uri: item.imgUrl }}
          title={name}
          subtitle={item.foodDescription}
          onPress={() => navigation.push('ContactDetails', { contact: item })}
        />
      );
    }}
    ItemSeparatorComponent={Separator}
    ListHeaderComponent={() => <Separator />}
    ListFooterComponent={() => <Separator />}
    contentContainerStyle={{ paddingVertical: 20 }}
  />
);