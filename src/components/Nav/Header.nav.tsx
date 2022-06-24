import { NavOption } from './Nav.components';
import navOptions from './navOptions';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { NextComponentType } from 'next';
import Link from 'next/link';

const Header: NextComponentType = () => {
    const { publicKey } = useWallet();

    return (
        <Flex
            alignItems="center"
            borderBottom="1px solid"
            borderBottomColor="rgb(34, 35, 37)"
            h="14"
            justifyContent="space-between"
            position="fixed"
            px={['4', '16']}
            textColor="white"
            top="0"
            w="full"
        >
            <Link href="/">
                <Text cursor="pointer" fontSize="xl" fontWeight="500">
                    solkudos
                </Text>
            </Link>
            <Flex
                alignItems="center"
                display={{ base: 'none', md: 'flex' }}
                fontSize="sm"
                gap="4"
                textColor="gray.200"
            >
                {navOptions.map(option => (
                    <NavOption key={option.label} {...option} />
                ))}
            </Flex>

            {publicKey ? (
                <Link href="/mint">
                    <Button fontSize="md" h="8" px="4" rounded="sm">
                        Mint Kudos
                    </Button>
                </Link>
            ) : (
                <WalletMultiButton className="mint-kudos-button" />
            )}
        </Flex>
    );
};

export default Header;
