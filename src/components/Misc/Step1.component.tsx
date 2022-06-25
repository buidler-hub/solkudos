import MintCard from './MintCard.component';
import { Flex, Box, Input, Button } from '@chakra-ui/react';
import { NextComponentType, NextPageContext } from 'next';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IFormValues } from 'types/mintFormTypes';

interface props {
    vis: boolean;
    handleClick: () => void;
    setValue: UseFormSetValue<IFormValues>;
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
    setValue,
    register,
}) => {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            const binaryStr = reader.result as string;
            setValue('base64', binaryStr);
        };
        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

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
                        placeholder="Title goes here..."
                        {...inputStyles}
                        {...register('title')}
                    />

                    <Input
                        placeholder="Desc goes here..."
                        {...inputStyles}
                        {...register('description')}
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
                    {...getRootProps()}
                    cursor="pointer"
                >
                    <input {...getInputProps()} />
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
