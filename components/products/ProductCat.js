import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../Header";

export default function ProductCat({route, navigation}){
    const { item } = route.params;
    const [data, setData] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://fakestoreapi.com/products/category/'+item)
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

  const truncateTitle = (title) => {
    const maxLines = 2;
    const maxCharsPerLine = 15; 
    const lines = title.split('\n');
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join('\n') + '...';
    }

    const chars = title.split('');
    let currentLine = 0;
    let currentChars = 0;
    const truncatedChars = chars.reduce((acc, char) => {
      if (char === '\n' || currentChars >= maxCharsPerLine) {
        currentLine += 1;
        currentChars = 0;
      }

      if (currentLine < maxLines) {
        currentChars += 1;
        return acc + char;
      }

      return acc;
    }, '');

    return truncatedChars;
  };

  const renderItem = ({ item }) => {
    const truncatedTitle = truncateTitle(item.title);

    return (
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetail",{item})}>
    
        <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{truncatedTitle}</Text>
            <Text style={styles.productPrice}>$ {item.price}</Text>
            <View style={styles.ratingContainer}>
        <Text style={styles.productRating}>Evaluate: </Text>
        <Text style={styles.ratingNumber}>{item.rating.rate}</Text>
        <Text style={styles.ratingCount}> ({item.rating.count} Evaluate)</Text>
      </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item, index) => index.toString();

  return (
    <SafeAreaView style={styles.scrollContainer}>
        <View style={{paddingTop:20, paddingBottom:10 }}>
            <Header navigation={navigation}/>
        </View>
      <View style={styles.home}>
        
        <FlatList
          key={numColumns}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={numColumns}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
    },
    home: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#836FFF',
  
    },
    Text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    productItem: {
      alignItems: 'center',
      backgroundColor:'#836FFF',
      margin:3,
      width:180,
      height:270,
      
  
    },
    productImage: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 3,
      resizeMode: 'center',
    },
    productInfo: {
      marginTop: 5,
      width: '100%',
  
    },
    productName: {
      fontSize: 12,
      height:30,
    
    },
    productPrice: {
      marginTop: 5,
      fontSize: 16,
      color: 'red',
      fontWeight:'bold',
    
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    productRating: {
      fontSize: 12,
      color: 'orange',
    },
    ratingNumber: {
      fontSize: 12,
      color: 'orange',
      fontWeight: 'bold',
    },
    ratingCount: {
      fontSize: 12,
      color: 'black',
    },
  });