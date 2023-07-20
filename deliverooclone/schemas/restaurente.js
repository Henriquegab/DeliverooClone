import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurante',
  title: 'Restaurante',
  type: 'document',
  fields: [
      {
        name: "name",
        type: "string",
        title: "Nome do Restaurante",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "short_description",
        type: "string",
        title: "Descrição",
        validation: (Rule) => Rule.max(200),
      },
      {
        name: "image",
        type: "image",
        title: "Imagem do Restaurante",
        
      },
      {
        name: "lat",
        type: "number",
        title: "Latitude do Restaurante",
        
      },
      {
        name: "long",
        type: "number",
        title: "Longitude do Restaurante",
        
      },
      {
        name: "address",
        type: "string",
        title: "Endereço do Restaurante",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "rating",
        type: "number",
        title: "Digite uma avaliação de (1-5 Estrelas)",
        validation: (Rule) => 
          Rule.required()
          .min(1)
          .max(5)
          .error("Por favor, digite um valor entre 1 e 5"),
      },
      {
        name: "type",
        
        title: "Category",
        validation: (Rule) => Rule.required(),
        type: "reference",
        to: [{type: "category"}],
          
      },
      {
        name: "dishes",
        type: "array",
        title: "Dishes",
        of: [{type: "reference", to: [{type: "dish"}] }]
      },
  ],

  
})
