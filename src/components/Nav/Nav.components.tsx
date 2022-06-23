import { Link as ChakraLink, Text } from '@chakra-ui/react';
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

export { NavOption };
