import Layout from '../Layouts/Main.layout';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Layout>
            <WalletMultiButton />
        </Layout>
    );
};

export default Home;
