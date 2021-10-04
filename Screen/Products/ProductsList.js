import React from 'react'
import {Text,View,TouchableOpacity,Dimensions} from 'react-native';
import ProductsCard from './ProductsCard'

var{width}=Dimensions.get('window')

const ProductsList=(props)=>{

    const {item}=props

    return(
        <TouchableOpacity style={{width:'50%'}}>
            <View style={{width:width/2,backgroundColor:'black'}}>

                <ProductsCard {...item}/>
            </View>

        </TouchableOpacity>
    )
}

export default ProductsList;