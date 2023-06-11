import {View , Text , StyleSheet , Button} from "react-native"

export default function Home({navigation}) {
    return(
        <View style = {{flex:1 , padding : 7 ,}}>

            <Text style = {{fontWeight:'bold'}}> Home Screen</Text>

            <View style = {styles.head1}>
                <Button style = {{fontWeight:'bold'}} title=" Go to onboard screen"   onPress = { () => navigation.goBack() } />
            </View>


        </View> 

    )
}

const styles = StyleSheet.create({

    head1 : {

        position :'absolute' ,
        bottom : 7,
        alignSelf : 'center' ,
        marginBottom : 30 ,

    }

})