import { Heading, HStack, VStack, Text, Icon } from "native-base";
import { UserPhoto } from '@components/UserPhoto'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
export function HomeHeader(){
    return(
        <HStack bg="gray.600" pt={16} pb={6} px={8} alignItems="center">
            <UserPhoto
                source={{ uri: 'https://github.com/rodrigosabino03.png'}}
                alt='imagem do usuario'
                size={16}
                mr={4}
            />
            <VStack flex={1}>
                <Text color="gray.100" fontSize="md">
                    Olá,
                </Text>

                <Heading color="gray.100" fontSize="md" fontFamily="heading">
                    Rodrigo
                </Heading>
            </VStack>

            <TouchableOpacity>
                <Icon
                    as={MaterialIcons}
                    name='logout'
                    color='gray.200'
                    size={7}
                />
            </TouchableOpacity>
        </HStack>
    )
}