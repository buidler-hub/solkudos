import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';

const Header: NextComponentType = () => {
    return (
        <>
            <Flex
                position="fixed"
                top="0"
                w="full"
                h="14"
                borderBottom="1px solid"
                borderBottomColor="rgb(34, 35, 37)"
                alignItems="center"
                textColor="white"
                fontFamily="inter"
                px="16"
                justifyContent="space-between"
            >
                <Text fontWeight="500" fontSize="xl">
                    solkudos
                </Text>
                <Flex
                    dir="row"
                    gap="4"
                    alignItems="center"
                    fontSize="sm"
                    textColor="gray.200"
                >
                    <Link>Home</Link>
                    <Link>App</Link>
                    <Link>Discord</Link>
                    <Link>GitHub</Link>
                </Flex>
                <Button
                    h="8"
                    px="4"
                    fontWeight="500"
                    colorScheme="pink"
                    rounded="sm"
                    fontSize="sm"
                    fontFamily="inter"
                    display="grid"
                    placeItems="center"
                    _active={{}}
                    _hover={{}}
                    _focus={{}}
                >
                    Mint Kudos
                </Button>
            </Flex>
        </>
    );
};

export default Header;
