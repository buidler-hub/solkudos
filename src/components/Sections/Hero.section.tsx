import { Box, Text, Button } from '@chakra-ui/react';
import { NextComponentType } from 'next';

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
            <Text
                fontWeight="900"
                textColor="white"
                fontSize="6xl"
                lineHeight="72px"
            >
                The issue tracking <br />
                tool you&apos;ll fix
            </Text>

            <Text
                fontFamily="400"
                fontSize="xl"
                textColor="gray.100"
                opacity="80%"
            >
                Linear helps streamline software projects, sprints, tasks, and
                bug <br />
                tracking. It’s built for high-performance teams.
            </Text>

            <Button
                h="12"
                px="8"
                fontSize="lg"
                fontFamily="inter"
                fontWeight="500"
                textColor="white"
                bg="linear-gradient(92.7deg, #5D2CE8 0%, #4523A4 49.48%, rgba(93, 44, 232, 0.82) 100%)"
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
