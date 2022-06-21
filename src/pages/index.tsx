import { Hero } from '../components';
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
                <Hero />
            </Box>
        </>
    );
};

export default Home;
