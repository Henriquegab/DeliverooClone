import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'


const NovidadeRow = ({id, title, description, featuredCategory}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ 
          paddingHorizontal: 15,
          paddingTop: 10}}
          className="pt-4"
        >
        {/* Restaurant cards */}

            <RestaurantCard 
            id={1}
            imgUrl="https://www.alegrafoods.com.br/wp-content/uploads/2020/07/9-img-blog.png"
            title="As melhores pizzas!"
            rating={4.5}
            genre="Pizza"
            address="Rua diamante 547"
            short_description="Essa é uma boa pizza"
            dishes={[]}
            long={20}
            lat={0}
            />
            <RestaurantCard 
            id={1}
            imgUrl="https://links.papareact.com/gn7"
            title="Uau, Sushi!"
            rating={5}
            genre="Japonês"
            address="Rua diamante 547"
            short_description="Essa é uma boa comida"
            dishes={[]}
            long={20}
            lat={0}
            />
            <RestaurantCard 
            id={1}
            imgUrl="https://s2.glbimg.com/m-xNHXakN6Ml5Qiwbuf5gNg7DWE=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/A/g/rpAvAbRy6FnsKiJ6EKDQ/arte-2-.png"
            title="Açaí delicioso!"
            rating={4.8}
            genre="Açaí"
            address="Rua diamante 547"
            short_description="Essa é uma boa comida"
            dishes={[]}
            long={20}
            lat={0}
            />


        </ScrollView>

    </View>
  )
}

export default NovidadeRow