import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import ReactTyped from 'react-typed';

const GitHubBadge = () => {
    return (
        <Flex
            _hover={{ bg: 'rgb(34, 35, 37)' }}
            alignItems="center"
            bg="#131314"
            border="thin solid"
            borderColor="rgb(34, 35, 37)"
            color="white"
            cursor="pointer"
            dir="row"
            fontSize="sm"
            h="8"
            px="6"
            rounded="full"
            transition="all 0.2s"
        >
            We&apos;re Open Source on
            <Text
                alignItems="center"
                color="pink.500"
                display="flex"
                flexDir="row"
                fontWeight="500"
                gap="1"
                ml="2"
            >
                GITHUB <BsArrowRight />
            </Text>
        </Flex>
    );
};

const MainText = () => {
    return (
        <Box color="white" fontSize={['3xl', '6xl']} fontWeight="900">
            <Box display="flex">
                Celebrate and Mint&nbsp;
                <Text color="pink.500" display={{ base: 'block', lg: 'none' }}>
                    wins
                </Text>
                <Text color="pink.500" display={{ base: 'none', lg: 'block' }}>
                    <ReactTyped
                        loop
                        strings={['wins', 'achievements']}
                        typeSpeed={50}
                    />
                </Text>
            </Box>
            <Text>as NFTs, together</Text>
        </Box>
    );
};

const CTAButton = () => {
    return <Button>Sign up for free</Button>;
};

export { GitHubBadge, MainText, CTAButton };
