import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'




const data = [
    {
        id: 43,
        title: 'Get a ride',
        image: 'https://images.pexels.com/photos/8247/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        screen: 'mapscreen'
    },
    {
        id: 58,
        title: 'Order food',
        image: 'https://www.linkpicture.com/q/imagefood.jpeg',
        screen: 'foodscreen'
    }
]

const NavChoice = () => {
    return (
        <View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={tw` ml-2 bg-slate-100 pt-0 shadow rounded-md mb-5 `}>
                        <Image
                            style={{ marginBottom: 10, width: '100%', borderRadius: 10, height: 270, }}
                            source={{
                                uri: item.image
                            }} />

                        <View style={tw`absolute  top-54 text-white`}>
                            <Text style={tw`text-white text-4xl `}>{item.title}</Text>

                        </View>





                    </TouchableOpacity>)
                }
            />




        </View>
    )
}

export default NavChoice





