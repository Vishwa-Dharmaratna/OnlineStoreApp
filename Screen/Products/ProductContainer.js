import React ,{useState,useEffect} from 'react'
import {View ,StyleSheet,Text,ActivityIndicator,FlatList} from 'react-native';

import ProductsList from './ProductsList';


const data = require('../../assets/data/{ }product.json');


const ProductContainer = ()=> {

    const[products,setProducts]=useState([])

    useEffect(()=>{
        setProducts(data)

        return ()=> {
            setProducts([]);
        }
    },[]);
    return (
        <View>
            <Text>Product Container</Text>
            <View style={{marginTop:100}}>
            <FlatList
            horizontal
            data={products}
            renderItem={({item})=><Text><ProductsList
            kry={item.id}
            /></Text>}
            keyExtractor={item=>item.name}
            />
            </View>
           
        </View>
    )
}

export default ProductContainer
