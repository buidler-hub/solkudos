import { Button, Flex, Text } from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';

const Header = () => {
    return (
        <Flex
            pos="absolute"
            top="0"
            zIndex="1"
            align="center"
            w="full"
            justify="space-between"
            py="5"
            pr="20"
        >
            <Text fontSize="3xl" color="white">
                Solkudos
            </Text>
            <Text
                _hover={{ textDecor: 'underline' }}
                fontSize="xl"
                color="white"
                cursor="pointer"
            >
                Why?
            </Text>
            <Button bg="rgba(255, 255, 255, 0.1)" rounded="full">
                <FaDiscord size="2em" color="white" />
                <Text fontSize="xl" color="white" ml="2">
                    Discord
                </Text>
            </Button>
        </Flex>
    );
};

export default Header;
