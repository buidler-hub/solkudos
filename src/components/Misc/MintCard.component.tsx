import { Flex, Box, ChakraProps, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Blob: FC<ChakraProps> = ({ ...otherProps }) => {
    return (
        <Box
            filter="blur(95px)"
            h="24"
            pos="absolute"
            rounded="full"
            w="36"
            {...otherProps}
        ></Box>
    );
};

const MintCard = ({ title, desc }) => {
    return (
        <Flex
            align="center"
            bg="#0F0F10"
            className="mintCard"
            flexDir="column"
            h="350px"
            justify="center"
            minW="350px"
            overflow="hidden"
            pos="relative"
            rounded="lg"
        >
            <Flex
                alignItems="center"
                bgColor="rgba(15, 15, 16, 0.4)"
                direction="column"
                gap="2"
                h="64"
                justifyContent="center"
                m="auto"
                pos="absolute"
                rounded="4"
                w="64"
                zIndex={2}
            >
                <Image
                    alt="champagne yum"
                    h="24"
                    src="/assets/champagne.svg"
                    w="24"
                />

                <Text fontSize="xl" textAlign="center" textColor="white">
                    {title}
                </Text>

                <Text fontSize="md" textAlign="center" textColor="gray.300">
                    {desc}
                </Text>
            </Flex>

            <Blob bgColor="#9333EA" bottom="0" left="0" />
            <Blob bgColor="#DB2777" right="0" top="0" />
        </Flex>
    );
};

export default MintCard;
