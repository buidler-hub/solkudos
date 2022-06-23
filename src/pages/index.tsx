import Layout from '../Layouts/Main.layout';
import { Hero } from '@/components';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
};

export default Home;
