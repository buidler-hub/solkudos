import '../styles/globals.css';
import theme from '@/theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/900.css';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    ConnectionProvider,
    WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    GlowWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { useMemo } from 'react';
import { Toaster } from 'react-hot-toast';

require('@solana/wallet-adapter-react-ui/styles.css');

const MyApp = ({ Component, pageProps }: AppProps) => {
    const network =
        process.env.NODE_ENV === 'development'
            ? WalletAdapterNetwork.Devnet
            : WalletAdapterNetwork.Mainnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
        ],
        [network],
    );

    return (
        <ChakraProvider theme={theme}>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider autoConnect wallets={wallets}>
                    <WalletModalProvider>
                        <Toaster />
                        <NextSeo
                            defaultTitle="Celebrate your launches, achievements together. Mint them as NFTs, directly on Solana Chain!"
                            title="Solkudos"
                        />
                        <NextNProgress
                            color="#D43E8C"
                            options={{ showSpinnner: false }}
                        />
                        <Component {...pageProps} />
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </ChakraProvider>
    );
};

export default MyApp;
