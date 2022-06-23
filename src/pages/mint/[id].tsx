import Layout from '@/Layouts/Main.layout';
import Kudos from '@/models/kudos';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import { connect } from 'mongoose';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';

interface IMintPageProps {
    data: any;
    Kudos: string;
}

const MintPage: NextPage<IMintPageProps> = ({ data, Kudos }) => {
    const { isPublic, whitelistedPublicKeys } = JSON.parse(Kudos);
    const { name, description, image } = data;

    const { publicKey } = useWallet();

    const canMint = () => {
        if (!publicKey) {
            return false;
        }

        if (isPublic) {
            return true;
        }
        if (whitelistedPublicKeys.includes(publicKey?.toString())) {
            return true;
        }
        return false;
    };

    useEffect(() => {}, []);

    return (
        <Layout>
            <Flex flexDir="column" gap="4" zIndex={1}>
                <Image alt={name} maxW="96" objectFit="contain" src={image} />
                <Text color="white" fontSize="3xl" fontWeight="semibold">
                    {name}
                </Text>
                <Text color="white">{description}</Text>
                <Button disabled={!canMint()}>Mint</Button>
            </Flex>
        </Layout>
    );
};

export default MintPage;

export const getServerSideProps: GetServerSideProps = async context => {
    await connect(process.env.MONGO_URI);
    const id = context.query.id as string;
    const KudosData = await Kudos.findOne({
        id,
    });

    const metaData = await axios.get(KudosData.metadata, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return {
        props: {
            data: metaData.data,
            Kudos: JSON.stringify(KudosData),
        },
    };
};
