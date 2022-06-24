import { Box, Flex } from '@chakra-ui/react';

const Step = ({ val, ...otherProps }) => {
    return (
        <Box
            bgColor="pink.500"
            border="5px solid"
            borderColor="pink.400"
            display="grid"
            fontFamily="inter"
            fontSize="xl"
            fontWeight="500"
            h="12"
            placeItems="center"
            rounded="full"
            textColor="white"
            w="12"
            {...otherProps}
        >
            {val}
        </Box>
    );
};

const Steps = ({ step }: { step: number }) => {
    return (
        <Flex alignItems="center">
            <Step val="0" />
            <Box
                bgColor={step === 1 ? 'pink.400' : 'pink.100'}
                h="2"
                w="20"
            ></Box>
            <Step
                bgColor={step === 0 ? 'pink.300' : 'pink.500'}
                borderColor={step === 0 ? 'pink.300' : 'pink.400'}
                val="1"
            />
        </Flex>
    );
};

export default Steps;
