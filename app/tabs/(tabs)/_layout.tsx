import React from 'react';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Entypo, Feather } from "@expo/vector-icons";

const TabLayout = ()=> {
  return (
    <Tabs screenOptions={{headerShown: useClientOnlyValue(false, true)}}>
      <Tabs.Screen name="home"
                   options={{
                       title: 'Accueil',
                       tabBarIcon: ({ color }) => <Feather name="home" size={24} color="black" />,
                   }}
      />
        <Tabs.Screen name="addItem"
                     options={{
                         title: 'Ajouter',
                         tabBarIcon: ({ color }) => <Entypo name="add-to-list" size={24} color="black" />,
                     }}
        />
    </Tabs>
  );
}

export default TabLayout;
