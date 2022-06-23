import {
    Button,
    ChakraProps,
    Link as ChakraLink,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface INavOptionProps {
    isExternal?: boolean;
    href: string;
    label: string;
}

const NavOption: FC<INavOptionProps> = ({ isExternal, href, label }) => {
    return (
        <>
            {isExternal ? (
                <ChakraLink cursor="pointer" href={href} isExternal>
                    <Text
                        _hover={{
                            textDecoration: 'underline',
                        }}
                        color="white"
                    >
                        {label}
                    </Text>
                </ChakraLink>
            ) : (
                <Link href={href}>
                    <Text
                        _hover={{
                            textDecoration: 'underline',
                        }}
                        color="white"
                        cursor="pointer"
                    >
                        {label}
                    </Text>
                </Link>
            )}
        </>
    );
};

const MintKudosButton: FC<ChakraProps> = ({ ...otherProps }) => {
    return (
        <Button
            _active={{
                bg: 'pink.400',
            }}
            _focus={{}}
            _hover={{
                bg: 'pink.600',
            }}
            bg="pink.500"
            color="white"
            fontSize="sm"
            fontWeight="500"
            h="8"
            px="4"
            rounded="sm"
            {...otherProps}
        >
            Mint Kudos
        </Button>
    );
};

export { NavOption, MintKudosButton };
