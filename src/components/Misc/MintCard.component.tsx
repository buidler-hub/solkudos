import { Box, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';

const MintCard: NextComponentType = () => {
    return (
        <Box bgColor="#0F0F10" display="grid" h="80" placeItems="center" w="80">
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
        </Box>
    );
};

export default MintCard;
