import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavChoice from '../Components/NavChoice'

const Home = () => {
    return (
        <View style={tw`p-4`}>
            <Image
                style={{ width: 100, height: 100, resizeMode: 'contain' }}
                source={{ uri: "https://links.papareact.com/gzs" }}
            />

            <NavChoice />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})