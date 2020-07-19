import React from "react"
import { Text, Image } from 'react-native';
// import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

// To convert SVG to React native component
// copy the svg from e.g. ./assets/icon-notification.svg and past it into
// https://react-svgr.com/playground/?native=true
// It will then generate the required SVG

// To install react-native-svg
// With expo-cli
// With Expo, you'll need to run expo install react-native-svg to install this library.

export const NotificationIcon: React.FC = (props) => {
    return (
        // svg not natively supported by native ?
        // <Image source={require('../assets/icon-home.svg')} />
        <Text>Skipping this for now, cannot get SVG loading, keep getting 'unable to resolve' error</Text>
        // <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
        //     <G clipPath="url(#prefix__clip0)" fill="#333">
        //         <Path d="M20 10V8A8 8 0 004 8v2a4.441 4.441 0 01-1.547 3.193A4.183 4.183 0 001 16c0 2.5 4.112 4 11 4s11-1.5 11-4a4.183 4.183 0 00-1.453-2.807A4.44 4.44 0 0120 10zM9.145 21.9a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1s-1.961-.032-2.855-.1z" />
        //     </G>
        //     <Defs>
        //         <ClipPath id="prefix__clip0">
        //             <Path fill="#fff" d="M0 0h24v24H0z" />
        //         </ClipPath>
        //     </Defs>
        // </Svg>
    )
}
