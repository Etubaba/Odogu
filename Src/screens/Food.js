import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/AntDesign'
import Place from 'react-native-vector-icons/Entypo'
import Ions from 'react-native-vector-icons/Ionicons'

const Food = ({ navigation }) => {
    return (
        <View style={tw`py-2 px-3`}>

            <Icon onPress={() => navigation.goBack()} name="arrowleft" size={25} />

            <Text style={tw`text-sm mt-3 text-left`}>Deliver to</Text>

            <View style={tw`flex justify-between flex-row mb-3`}>
                <View style={tw`flex flex-row -ml-1`}>

                    <Place style={tw` text-black`} name='location-pin' size={20} />
                    <Text style={tw` text-xl  text-black`}>
                        Select place
                    </Text>
                    <Icon style={tw` ml-2 mt-2`} name='caretdown' size={10} />
                </View>



                <Image
                    style={{
                        borderRadius: 30, width: 30, height: 30,
                        resizeMode: 'cover',
                    }}
                    source={{ uri: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" }}
                />
            </View>

            <View style={tw`flex flex-row mt-4`}>

                <View style={tw`bg-gray-200 px-3 rounded-lg  w-[85%] mr-3 flex flex-row`}>
                    <Icon style={tw`mt-4 mr-2`} name='search1' size={15} />
                    <TextInput
                        placeholder='Search for food'
                    />
                </View>
                <TouchableOpacity style={tw`bg-black rounded-lg justify-center items-center py-2 w-10 mr-2`}>
                    <Ions name='fast-food-outline' color='white' size={20} />
                </TouchableOpacity>
            </View>






        </View>
    )
}

export default Food