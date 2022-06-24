import MintCard from './MintCard.component';
import { Flex, Box, Input, Button } from '@chakra-ui/react';
import { NextComponentType, NextPageContext } from 'next';

interface props {
    vis: boolean;
    handleClick: () => void;
}

const StepOne: NextComponentType<NextPageContext, {}, props> = ({
    vis,
    handleClick,
}: props) => {
    return (
        <Flex
            display={!vis ? 'none' : 'flex'}
            justifyContent="space-between"
            w="full"
        >
            <MintCard />

            <Box
                alignItems="center"
                display="flex"
                flexDir="column"
                h="80"
                justifyContent="space-between"
                w="80"
            >
                <Flex alignItems="center" direction="column" gap="4">
                    <Input
                        _active={{}}
                        _focus={{}}
                        _hover={{}}
                        _placeholder={{
                            fontFamily: 'inter',
                            textColor: 'rgb(255, 255, 255, 0.4)',
                            fontSize: '15px',
                        }}
                        bgGradient="linear(90.97deg, rgba(15, 15, 16, 0.76) 0%, rgba(15, 15, 16, 0.57) 100%)"
                        border="none"
                        h="10"
                        outline="none"
                        placeholder="Title goes here..."
                        rounded="lg"
                        w="80"
                    />

                    <Input
                        _active={{}}
                        _focus={{}}
                        _hover={{}}
                        _placeholder={{
                            fontFamily: 'inter',
                            textColor: 'rgb(255, 255, 255, 0.4)',
                            fontSize: '15px',
                        }}
                        bgGradient="linear(90.97deg, rgba(15, 15, 16, 0.76) 0%, rgba(15, 15, 16, 0.57) 100%)"
                        border="none"
                        h="10"
                        outline="none"
                        placeholder="Desc goes here..."
                        rounded="lg"
                        w="80"
                    />
                </Flex>

                <Box
                    bgGradient="linear(90.97deg, rgba(15, 15, 16, 0.76) 0%, rgba(15, 15, 16, 0.57) 100%)"
                    fontFamily="inter"
                    fontSize="md"
                    fontWeight="500"
                    py="8"
                    rounded="lg"
                    textColor="rgb(255, 255, 255, 0.4)"
                    w="full"
                >
                    or drag n drop a file here...
                </Box>

                <Button fontSize="md" h="10" onClick={handleClick} w="85%">
                    Next Step
                </Button>
            </Box>
        </Flex>
    );
};

export default StepOne;
