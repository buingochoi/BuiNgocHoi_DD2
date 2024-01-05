import { Heading, Box, Flex, Image, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import products from "../data/Products";
import Colors from "../color";
import Rating from "../Components/Rating";

function HomeProducts(){
    return(
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex
            flexWrap="wrap"
            direction="row"
            justifyContent="space-between"
            px={6}
            >
                {products.map((product) =>(
                        <Pressable key={product.id} 
                        w="47%" 
                        bg={Colors.white}
                        rounded="md"
                        shadow={2}
                        pt={0.3}
                        my={3}
                        pb={2}
                        overflow="hidden"
                        >
                            <Image
                            source={{uri:product.image}}
                            alt={product.title}
                            w="full"
                            h={24}
                            resizeMode="contain"
                            />
                            
                            <Box px={4} pt={1}>
                                <Heading size="sm" bold>
                                    ${product.price}
                                </Heading>
                                <Text fontSize={10} mt={1} isTruncated w="full">
                                    {product.title}
                                </Text>
                            </Box>
                            <Rating value={product.rating.rate}/>
                        </Pressable>

                ))}

            </Flex>
        </ScrollView>
    );
}
export default HomeProducts;