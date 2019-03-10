import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) =>{
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = style;
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{uri: image }}/>
            </CardSection>
            <CardSection>
                <Button 
                text="Buy Now!" 
                onPress={()=>Linking.openURL(url)}/>
            </CardSection>
        </Card>
    );
}

const style = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;