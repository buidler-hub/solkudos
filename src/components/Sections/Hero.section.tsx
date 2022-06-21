import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import { BsArrowRight } from 'react-icons/bs';

const Hero: NextComponentType = () => {
    return (
        <Box
            display="flex"
            flexDir="column"
            gap="6"
            textAlign="center"
            justifyContent="center"
            fontFamily="inter"
            alignItems="center"
        >
            <Flex
                px="6"
                h="8"
                rounded="full"
                border="thin solid"
                borderColor="rgb(34, 35, 37)"
                fontSize="sm"
                textColor="white"
                cursor="pointer"
                bg="#131314"
                _hover={{ bg: 'rgb(34, 35, 37)' }}
                transition="all 0.2s"
                dir="row"
                alignItems="center"
            >
                We&apos;re Open Source on GitHub |&nbsp;
                <Text
                    color="purple.500"
                    fontWeight="500"
                    display="flex"
                    flexDir="row"
                    alignItems="center"
                    gap="1"
                >
                    GITHUB <BsArrowRight />
                </Text>
            </Flex>
            <Text
                fontWeight="900"
                textColor="white"
                fontSize="6xl"
                lineHeight="72px"
            >
                Celebrate wins together <br />
                Mint Achievements as NFTs
            </Text>

            <Text
                fontFamily="400"
                fontSize="xl"
                textColor="gray.100"
                opacity="80%"
            >
                Celebrate your launches, achievements together. Mint them as{' '}
                <br />
                NFTs, directly on Solana Chain!
            </Text>

            <Button
                h="12"
                px="8"
                fontSize="lg"
                fontFamily="inter"
                fontWeight="500"
                textColor="white"
                bgGradient="linear(93.04deg, #9211F8 0%, rgba(173, 34, 239, 0.99) 100%)"
                _hover={{}}
                _active={{}}
                _focus={{}}
                mt="4"
            >
                Sign up for free
            </Button>
        </Box>
    );
};

export default Hero;
