import React, {useState} from 'react'
import { View, Image, TouchableOpacity } from "react-native"


const Foco=()=>{
    const [estatus, setEstatus] = useState(false);
    return(
            <view>
                <TouchableOpacity onPress={() => setEstatus(!estatus)}>
                    <Image source={
                    estatus ? require('../../src/components/img/focoOn.png')
                            : require('../../src/components/img/focoOff.png')}
                    style= {{width: 50, height: 50}}
                    />
                </TouchableOpacity>

            </view>
        )
}

export default Foco