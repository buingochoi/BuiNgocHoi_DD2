import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "./Header";
import axios from "axios";


export default function Category({navigation}){
    const [data, setData] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        console.log('Finally called');
      });
  };
    return (
    <View style={{flex:1}}>
        <View style={{paddingTop:20}}> 
         <Header navigation={navigation}/>
        </View>
        <ScrollView style={{flex:1, }}>
            {data.map((item, index)=>{
                return (
                    
            <TouchableOpacity onPress={() => navigation.navigate("ProductCat",{item})} style={{borderWidth:0.3, backgroundColor:"#e8e8e8", height:200, justifyContent:"center"}}>
                <Text style={{fontSize:20}}>{item}</Text>
                </TouchableOpacity>
                );
            })}
        </ScrollView>
    </View>
    );
}