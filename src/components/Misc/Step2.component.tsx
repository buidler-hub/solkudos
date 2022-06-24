import { Flex, Textarea, Checkbox, Button } from '@chakra-ui/react';
import { NextComponentType, NextPageContext } from 'next';

interface props {
    vis: boolean;
}

const StepTwo: NextComponentType<NextPageContext, {}, props> = ({
    vis,
}: props) => {
    return (
        <Flex
            alignItems="center"
            display={!vis ? 'none' : 'flex'}
            justifyContent="space-between"
            px="12"
            w="full"
        >
            <Textarea
                _active={{}}
                _focus={{}}
                _hover={{}}
                _placeholder={{
                    fontFamily: 'inter',
                    textColor: 'rgb(255, 255, 255, 0.4)',
                    fontSize: '16px',
                }}
                bgGradient="linear(90.97deg, rgba(15, 15, 16, 0.76) 0%, rgba(15, 15, 16, 0.57) 100%)"
                border="none"
                borderColor="white"
                outline="none"
                placeholder="Enter desired addresses over here..."
                rounded="lg"
                size="md"
                w="96"
            />

            <Flex
                alignItems="center"
                direction="column"
                h="32"
                justifyContent="space-between"
            >
                <Checkbox
                    _active={{}}
                    _focus={{}}
                    fontFamily="inter"
                    fontSize="xl"
                    fontWeight="500"
                    size="lg"
                    textColor="white"
                >
                    Private
                </Checkbox>

                <Button>Mint Kudo</Button>
            </Flex>
        </Flex>
    );
};

export default StepTwo;
