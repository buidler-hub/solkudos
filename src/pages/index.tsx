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
                    bgGradient="linear(120.07deg, rgba(145, 18, 244, 0.6) 0%, rgba(34, 177, 222, 0.456) 100%)"
                    rounded="full"
                    bottom="0"
                    left="0"
                    filter="blur(200px)"
                ></Box>
                <Box
                    h="72"
                    w="96"
                    position="absolute"
                    bgGradient="linear(120.07deg, rgba(73, 33, 237, 0.6) 0%, rgba(235, 72, 131, 0.474) 100%)"
                    rounded="full"
                    bottom="0"
                    right="0"
                    filter="blur(200px)"
                ></Box>
            </Box>
        </>
    );
};

export default Home;
