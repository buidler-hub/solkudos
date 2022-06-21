import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="preload"
                    href="/fonts/ClashDisplay.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
