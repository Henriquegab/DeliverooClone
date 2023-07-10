import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import CategoriaCard from './CategoriaCard'

export class Categorias extends Component {
  render() {
    return (
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ 
        paddingHorizontal: 15,
        paddingTop: 10
       }}
      
      >
        {/* Card de categoria */}
        <CategoriaCard imgUrl="https://links.papareact.com/gn7" title="teste"/>
        <CategoriaCard imgUrl="https://links.papareact.com/gn7" title="teste"/>
        <CategoriaCard imgUrl="https://links.papareact.com/gn7" title="teste"/>
        <CategoriaCard imgUrl="https://links.papareact.com/gn7" title="teste"/>
        <CategoriaCard imgUrl="https://links.papareact.com/gn7" title="teste"/>
        <CategoriaCard imgUrl="https://links.papareact.com/gn7" title="teste"/>
        <CategoriaCard imgUrl="https://links.papareact.com/gn7" title="teste"/>
        
      </ScrollView>
    )
  }
}

export default Categorias