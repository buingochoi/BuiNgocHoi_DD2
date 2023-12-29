import { Box, Button, Heading, Image, Input, Pressable, Text, VStack, View } from "native-base";
import React from "react";

import Colors from "../color";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

function LoginScreen(){
    return(
        <Box flex={1} bg={Colors.black}>
            <Image
            flex={1} 
            alt="Logo"
            resizeMode="cover"
            size="lg"
            w="full"
            source={require("../../assets/cover.png")}
            />
            <Box
                w="full"
                h= "full"
                position="absolute"
                top="0"
                px="6"
                justifyContent="center"
            >
                <Heading>LOGIN</Heading>
                <VStack space={5} pt="6">
                    <Input
                    ImputLeftElement={
                        <MaterialIcons name="email" size={20} color={Colors.black} />                    }
                    variant="undetrlined"
                    placeholder="user@gmail.com"
                    w="70%"
                    pl={2}
                    color={Colors.main}
                    borderBottomColor={Colors.underline}
                    />

                    <Input
                    ImputLeftElement={
                        <FontAwesome name="eye" size={20} color={Colors.black} />                    }
                    variant="undetrlined"
                    placeholder="**********"
                    w="70%"
                    pl={2}
                    color={Colors.main}
                    borderBottomColor={Colors.underline}
                    />
                
                </VStack>
                <Button 
                _pressed={{
                    bg:Colors.main,
                }}
                my={30} 
                w="40%"
                rounded={50} 
                bg={Colors.main}
                >
                    LOGIN
                </Button> 
               <Pressable mt={4}>
               <Text color={Colors.deepestGray}>SIGN UP</Text>
               </Pressable>
               
            </Box>
        </Box>
    );
}
export default LoginScreen;