import { Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';

const MintCard: NextComponentType = () => {
    return (
        <Flex
            align="center"
            bg="#0F0F10"
            flexDir="column"
            h="350px"
            justify="center"
            minW="350px"
            pos="relative"
            rounded="lg"
        >
            <Text
                bgClip="text"
                bgGradient="linear(90deg, #EC008C 0%, #FC6767 100%)"
                fontFamily="inter"
                fontSize="5xl"
                fontStyle="italic"
                fontWeight="800"
                transform="rotate(-15deg)"
            >
                CARD <br />
                THINGY
            </Text>
        </Flex>
    );
};

export default MintCard;
