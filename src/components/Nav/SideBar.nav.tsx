import { NavOption } from './Nav.components';
import navOptions from './navOptions';
import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { NextComponentType } from 'next';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';

const SideBar: NextComponentType = () => {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '100%' },
    };

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {!showSidebar && (
                <Box
                    bgColor="white"
                    cursor="pointer"
                    display={{ base: 'grid', md: 'none' }}
                    h="14"
                    onClick={() => setShowSidebar(true)}
                    placeItems="center"
                    pos="absolute"
                    right="4"
                    rounded="full"
                    top="4"
                    w="14"
                    zIndex="10"
                >
                    <FiMenu color="black" size="30" />
                </Box>
            )}
            <AnimatePresence>
                <Box
                    animate={showSidebar ? 'open' : 'closed'}
                    as={motion.div}
                    bg="rgba(0,0,0,0.9)"
                    display={showSidebar ? 'flex' : 'none'}
                    flexDir="column"
                    gap="4"
                    justifyContent="center"
                    minH="100vh"
                    position="fixed"
                    px="4"
                    right="0"
                    top="0"
                    variants={variants}
                    w="56"
                    zIndex="10"
                >
                    <Box
                        bg="white"
                        cursor="pointer"
                        display="grid"
                        h="12"
                        onClick={() => setShowSidebar(false)}
                        placeItems="center"
                        pos="absolute"
                        right="4"
                        rounded="full"
                        top="4"
                        w="12"
                    >
                        <IoIosClose color="black" size="40" />
                    </Box>
                    <Flex align="center" direction="column" gap="4">
                        {navOptions.map(option => (
                            <NavOption key={option.label} {...option} />
                        ))}
                    </Flex>
                </Box>
            </AnimatePresence>
        </>
    );
};

export default SideBar;
