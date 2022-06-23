import { NavOption } from './Nav.components';
import navOptions from './navOptions';
import { Box, Flex } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const SideBar: NextComponentType = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {!showSidebar && (
                <Box
                    display={{ base: 'flex', md: 'none' }}
                    onClick={() => setShowSidebar(true)}
                    pos="absolute"
                    right="4"
                    top="4"
                    zIndex="10"
                >
                    <GiHamburgerMenu color="white" size="1.5rem" />
                </Box>
            )}
            <Box
                bg="rgba(0,0,0,0.9)"
                display={{ base: 'flex', md: 'none' }}
                flexDir="column"
                gap="4"
                justifyContent="center"
                minH="100vh"
                position="fixed"
                px="4"
                right="0"
                top="0"
                transform={showSidebar ? 'translateX(0)' : 'translateX(100%)'}
                transition="all 0.3s ease-in-out"
                w="56"
                zIndex="10"
            >
                <Box pos="absolute" right="4" top="4">
                    <AiOutlineClose
                        color="white"
                        onClick={() => setShowSidebar(false)}
                        size="2rem"
                    />
                </Box>
                <Flex align="center" direction="column" gap="4">
                    {navOptions.map(option => (
                        <NavOption key={option.label} {...option} />
                    ))}
                </Flex>
            </Box>
        </>
    );
};

export default SideBar;
