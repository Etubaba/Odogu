import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'




const data = [
    {
        id: 43,
        title: 'Get a ride',
        // image: 'https://images.pexels.com/photos/8247/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        image: 'https://files.fm/thumb_show.php?i=zy86j8u92',
        screen: 'ride'
    },
    {
        id: 58,
        title: 'Order food',
        image: 'https://files.fm/thumb_show.php?i=wrxww7wre',
        // image: 'https://www.linkpicture.com/q/imagefood.jpeg',
        screen: 'food'
    }
]

const NavChoice = () => {

    const navigation = useNavigation()
    return (
        <View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw` ml-2 bg-slate-100 pt-0 shadow rounded-md mb-5 `}>
                        <Image
                            style={{ marginBottom: 10, width: '100%', borderRadius: 10, height: 270, }}
                            source={{
                                uri: item.image
                            }} />

                        <View style={tw`absolute z-50 flex flex-row   top-54 text-white`}>
                            <Text style={tw`text-white mr-32 text-4xl `}>{item.title}</Text>
                            <Icon name="arrowright" size={30} color="#fff" />
                        </View>

                    </TouchableOpacity>)
                }
            />




        </View>
    )
}

export default NavChoice





