import {
    CTAButton,
    GitHubBadge,
    MainText,
} from '../Landing/Landing.components';
import { Box, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';

const Hero: NextComponentType = () => {
    return (
        <Box
            alignItems="center"
            display="flex"
            flexDir="column"
            gap="6"
            justifyContent="center"
            textAlign="center"
        >
            <GitHubBadge />
            <MainText />

            <Text color="gray.100" fontFamily="400" fontSize="xl" opacity="80%">
                Celebrate your launches, achievements together. Mint them as{' '}
                <br />
                NFTs, directly on Solana Chain!
            </Text>
            <CTAButton />
        </Box>
    );
};

export default Hero;
