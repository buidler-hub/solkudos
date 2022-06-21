import { Header, Hero } from '../components';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <Box
                minH="100vh"
                w="full"
                overflowX="hidden"
                bgColor="body"
                display="flex"
                textAlign="center"
                justifyContent="center"
                fontFamily="inter"
                alignItems="center"
            >
                <Header />
                <Hero />

                <Box
                    h="72"
                    w="96"
                    position="absolute"
                    bg="purple.600"
                    rounded="full"
                    left="0"
                    margin="auto"
                    filter="blur(200px)"
                ></Box>
                <Box
                    h="72"
                    w="96"
                    position="absolute"
                    bg="pink.600"
                    rounded="full"
                    margin="auto"
                    right="0"
                    filter="blur(200px)"
                ></Box>
            </Box>
        </>
    );
};

export default Home;
