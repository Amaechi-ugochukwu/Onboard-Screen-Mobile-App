
import React from "react"

import {View , Text , Image , FlatList , StatusBar, Dimensions , SafeAreaView , StyleSheet , TouchableOpacity} from "react-native"



 import slides from "../data/slide"

const {width , height} = Dimensions.get('window')



const Slide = ({item}) => {
    return( 
      
            <View style = {{alignItems : 'center'  ,}}>

                <Image source={item?.image} style = {{ height:300 , width, resizeMode:'contain' }}/>

           <View style={{flexDirection:'column' , marginTop:50 , textAlign :'center'}}>
               <Text style={{fontWeight:'bold' , color:'#fff' , fontSize :25}}>  {item?.title} </Text>
               <Text style={{fontWeight:'bold' , marginTop:30 }}>{item?.subtitle}</Text>
           

               </View>
                </View>

    )
}


export default function OnBoard({navigation}){
   


 const [currentSlideIndex , setCurrentSlideIndex] = React.useState(0)
 const ref = React.useRef()

 const updateCurrentSlideIndex = e =>  {
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currentIndex =  Math.round(currentOffsetx / width)

    setCurrentSlideIndex(currentIndex)
 }

 const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex +1 ; 
    if(nextSlideIndex != slides.length){
        const offset = nextSlideIndex * width
        ref?.current.scrollToOffset({offset})
        setCurrentSlideIndex (currentSlideIndex + 1)
    }
    
    }

 const skip = () => {
     const lastSlideIndex = slides. length - 1;
     const offset = lastSlideIndex * width ;
     ref?.current.scrollToOffset({offset})
     setCurrentSlideIndex(lastSlideIndex)
 }
 
const Footer = () => {
    return(

        <View style={{height: height * 0.25, justifyContent : 'space-between' ,  paddingHorizontal : 20}}>
            {/* indicators */}
            <View style = {{flexDirection:'row' , justifyContent:'center' , marginTop:20}}>
                {
                    slides.map((_,index) => (

                        <View  key={index} style = {[ styles.indicator,
                            currentSlideIndex == index && {backgroundColor:'#fff' , width:25}, ]}/>

   
                    ))}

            </View>
            <View>
            {currentSlideIndex == slides.length - 1 ?(
                   <View style = {{ textAlign:'center' , marginBottom:30 , }}>
                    <TouchableOpacity activeOpacity={0.9} onPress = {() => navigation.navigate('Home')}>
                    <Text style = {{backgroundColor:'#fff' , fontWeight:'bold' , padding:10 , width:140 , textAlign:'center' ,
                   alignSelf:'center'}}> Get Started</Text>
                   </TouchableOpacity>
                   </View>
            ) : (
         
        <View style={{flexDirection:'row' , justifyContent:'space-between', padding:10 , paddingHorizontal:50 , paddingVertical: 30}}>
            <TouchableOpacity activeOpacity={0.8} onPress = {skip}>
        <Text style={{backgroundColor:'#fff' , fontWeight:'bold' , padding:10 , width:100 , textAlign:'center' , 
        background:'transparent' , border : '1px solid #000' ,}}>Skip</Text>
                </TouchableOpacity>
          
         <TouchableOpacity activeOpacity={0.8} onPress = {goToNextSlide}>
        <Text style = {{backgroundColor:'#fff' , fontWeight:'bold' , padding:10 , width:100 , textAlign:'center' ,
        }}>Next</Text>
        </TouchableOpacity>
      
      
       </View>
       )}
       </View>
       </View>
      
    )
}
   

    return(

        <SafeAreaView style={{flex:1 , backgroundColor : '#282534'}}>
         <StatusBar style ={{backgroundColor : '#282534'}}/>

           <FlatList
           ref = {ref}
           onMomentumScrollIndex = {updateCurrentSlideIndex}
           contentContainerStyle = {{height: height * 0.75}}
           showsHorizontalScrollIndicator={false}
           horizontal
           data = {slides}
           pagingEnabled 
           renderItem = { ({item})  => <Slide item = {item} />}
           /> 
           
          <Footer />
        </SafeAreaView>
      
    )

}


const styles = StyleSheet.create({
    indicator : {
        height:2.5,
        width : 10 ,
        backgroundColor : '#fff',
        marginHorizontal:3,
        borderRadius:10
    }
})
