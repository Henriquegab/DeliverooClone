import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categorias from '../components/Categorias';
import NovidadeRow from '../components/NovidadeRow';


const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{ uri: 'https://links.papareact.com/wru' }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        
        />
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Peça agora!</Text>
            <Text className="font-bold text-xl">Localização Atual <ChevronDownIcon size={20} color="#00CCBB"></ChevronDownIcon></Text>
        </View>

        <UserIcon size={35} color="#00CCBB"></UserIcon>


      </View>

        {/* search */}

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <MagnifyingGlassIcon color="gray"/>
                <TextInput placeholder='Restaurantes e cozinhas' keyboardType='default'/>
            </View>
            <AdjustmentsVerticalIcon color="#00CCBB"></AdjustmentsVerticalIcon>
        </View>

        {/* Body */}

        <ScrollView className="bg-gray-100">

                {/* categorias */}
                    <Categorias />
                {/* novidades */}
                <NovidadeRow
                id="1"
                title="Novidades"
                description="Ofertas de nossos parceiros"
                />
                <NovidadeRow
                id="2"
                title="Novidades"
                description="Ofertas de nossos parceiros"
                />
                <NovidadeRow
                id="3"
                title="Novidades"
                description="Ofertas de nossos parceiros"
                />

        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen