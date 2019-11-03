import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const MyFancyButton = () => {
    return (
        <TouchableOpacity onPress={()=> console.log('MyFancyButton clicked')}>
            <Text>MyFancyButton component</Text>
        </TouchableOpacity>
    )
}
export default MyFancyButton
