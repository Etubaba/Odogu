import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/AntDesign'
import Place from 'react-native-vector-icons/Entypo'

const Food = ({ navigation }) => {
    return (
        <View style={tw`py-2 px-3`}>
            <View>
                <Icon onPress={() => navigation.goBack()} name="arrowleft" size={25} />

                <Text style={tw`text-sm mt-3 text-left`}>Deliver to</Text>

                <View style={tw`flex justify-between flex-row`}>
                    <View style={tw`flex flex-row -ml-1`}>

                        <Place style={tw` text-black`} name='location-pin' size={20} />
                        <Text style={tw` text-xl  text-black`}>
                            Select place
                        </Text>
                        <Icon style={tw` ml-2 mt-2`} name='caretdown' size={10} />
                    </View>



                    <Image
                        style={{
                            borderRadius: 75, width: 25, height: 25,
                            resizeMode: 'cover',
                        }}
                        source={{ uri: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" }}
                    />



                </View>





            </View>
        </View>
    )
}

export default Food