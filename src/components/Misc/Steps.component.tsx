import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

const Step = ({ val, ...otherProps }) => {
    return (
        <Box
            bgColor="pink.500"
            border="5px solid"
            borderColor="pink.400"
            cursor="pointer"
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

interface IStepsProps {
    step: number;
    // eslint-disable-next-line no-unused-vars
    setStep: (step: number) => void;
}

const Steps: FC<IStepsProps> = ({ step, setStep }) => {
    return (
        <Flex alignItems="center">
            <Step onClick={() => setStep(0)} val="0" />
            <Box
                bgColor={step === 1 ? 'pink.400' : 'pink.100'}
                h="2"
                w="20"
            ></Box>
            <Step
                bgColor={step === 0 ? 'pink.300' : 'pink.500'}
                borderColor={step === 0 ? 'pink.300' : 'pink.400'}
                cursor={step === 0 ? 'not-allowed' : 'pointer'}
                disabled={step === 0}
                onClick={() => {
                    if (step === 0) {
                        return;
                    }
                    setStep(1);
                }}
                opacity={step === 0 ? 0.5 : 1}
                val="1"
            />
        </Flex>
    );
};

export default Steps;
