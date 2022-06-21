import '../styles/fonts.css';
import theme from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/900.css';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <NextSeo title="Solkudos" />
            <NextNProgress color="#000" options={{ showSpinnner: false }} />
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
