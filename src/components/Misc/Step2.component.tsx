import { Flex, Textarea, Button, Checkbox } from '@chakra-ui/react';
import { NextComponentType, NextPageContext } from 'next';
import { useState } from 'react';
import {
    UseFormGetValues,
    UseFormRegister,
    UseFormSetValue,
} from 'react-hook-form';
import { IFormValues } from 'types/mintFormTypes';

interface props {
    vis: boolean;
    handleClick: () => void;
    getValues: UseFormGetValues<IFormValues>;
    setValue: UseFormSetValue<IFormValues>;
    register: UseFormRegister<IFormValues>;
    isLoading: boolean;
}

const StepTwo: NextComponentType<NextPageContext, {}, props> = ({
    vis,
    handleClick,
    getValues,
    setValue,
    register,
    isLoading,
}) => {
    const [isPublic, setIsPublic] = useState(getValues('isPublic'));

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
                placeholder="Enter comma separated list of allowed addresses here..."
                rounded="lg"
                size="md"
                w="96"
                {...register('whitelistedPublicKeys')}
                disabled={isPublic}
                fontFamily="inter"
                fontWeight="500"
                textColor="rgb(255, 255, 255, 0.4)"
                zIndex={3}
            />
            <Flex alignItems="center" direction="column" gap="3">
                <Checkbox
                    _active={{}}
                    _focus={{}}
                    _hover={{}}
                    checked={isPublic}
                    fontFamily="inter"
                    fontSize="xl"
                    fontWeight="500"
                    onChange={e => {
                        setValue('isPublic', e.target.checked);
                        setIsPublic(e.target.checked);
                    }}
                    size="lg"
                    textColor="white"
                >
                    Public
                </Checkbox>
                <Button isLoading={isLoading} onClick={handleClick}>
                    Mint Kudo
                </Button>
            </Flex>
        </Flex>
    );
};

export default StepTwo;
