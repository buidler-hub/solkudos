import { MintKudosButton, NavOption } from './Nav.components';
import navOptions from './navOptions';
import { Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';

const Header: NextComponentType = () => {
    return (
        <Flex
            alignItems="center"
            borderBottom="1px solid"
            borderBottomColor="rgb(34, 35, 37)"
            h="14"
            justifyContent="space-between"
            position="fixed"
            px={['4', '16']}
            textColor="white"
            top="0"
            w="full"
        >
            <Text fontSize="xl" fontWeight="500">
                solkudos
            </Text>
            <Flex
                alignItems="center"
                display={{ base: 'none', md: 'flex' }}
                fontSize="sm"
                gap="4"
                textColor="gray.200"
            >
                {navOptions.map(option => (
                    <NavOption key={option.label} {...option} />
                ))}
            </Flex>

            <MintKudosButton display={{ base: 'none', md: 'flex' }} />
        </Flex>
    );
};

export default Header;
