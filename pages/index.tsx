import Header from '../components/Header';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <Flex flexDir="column" w="100vw" minH="100vh" bg="#000922" px="10">
            <Header />
            <Flex w="100%" justify="space-between" pt="40" align="center">
                <Flex
                    flexDir="column"
                    fontSize="52px"
                    color="white"
                    maxW="600px"
                >
                    <Text>Celebrate wins together</Text>
                    <Text>
                        Mint your achievement as NFTs to your whole group on
                    </Text>
                </Flex>
                <Image
                    src="/assets/champagne.png"
                    width={523}
                    height={392}
                    objectFit="contain"
                    alt=""
                />
            </Flex>
        </Flex>
    );
};

export default Home;
