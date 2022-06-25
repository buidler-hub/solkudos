import MintCard from './MintCard.component';
import { Flex, Box, Input, Button } from '@chakra-ui/react';
import { NextComponentType, NextPageContext } from 'next';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from 'types/mintFormTypes';

interface props {
    vis: boolean;
    handleClick: () => void;
    register: UseFormRegister<IFormValues>;
}

const inputStyles = {
    _placeholder: {
        fontFamily: 'inter',
        textColor: 'rgb(255, 255, 255, 0.4)',
        fontSize: '15px',
    },
    my: '2',
    bgGradient:
        'linear(90.97deg, rgba(15, 15, 16, 0.76) 0%, rgba(15, 15, 16, 0.57) 100%)',
    rounded: 'lg',
    border: 'none',
    color: 'white',
    outline: 'none',
    fontSize: 'lg',
    px: '6',
    w: '80',
    h: '10',
};

const StepOne: NextComponentType<NextPageContext, {}, props> = ({
    vis,
    handleClick,
    register,
}) => {
    const [title, setTitle] = useState<string>();
    const [desc, setDesc] = useState<string>();

    return (
        <Flex
            display={!vis ? 'none' : 'flex'}
            justifyContent="space-between"
            w="full"
        >
            <MintCard desc={desc} title={title} />

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
                        placeholder="Title goes here..."
                        {...inputStyles}
                        {...register('title')}
                        onChange={e => setTitle(e.target.value as string)}
                    />

                    <Input
                        placeholder="Desc goes here..."
                        {...inputStyles}
                        {...register('description')}
                        onChange={e => setDesc(e.target.value as string)}
                    />
                </Flex>

                <Button fontSize="md" h="10" onClick={handleClick} w="85%">
                    Next Step
                </Button>
            </Box>
        </Flex>
    );
};

export default StepOne;
