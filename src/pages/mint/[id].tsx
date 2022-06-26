import Layout from '@/Layouts/Main.layout';
import { ClaimedKudoModal } from '@/components';
import Kudos from '@/models/kudos';
import { Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import { connect } from 'mongoose';
import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface IMintPageProps {
    data: any;
    Kudos: any;
}

const MintPage: NextPage<IMintPageProps> = ({ data, Kudos }) => {
    const { isPublic, whitelistedPublicKeys } = JSON.parse(Kudos);
    const { name, description, image } = data;

    const { publicKey } = useWallet();
    const [isLoading, setLoading] = useState<boolean>(false);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [url, setUrl] = useState<string>();

    const canMint = () => {
        if (isPublic) {
            return true;
        }
        if (whitelistedPublicKeys.includes(publicKey?.toString())) {
            return true;
        }
        return false;
    };

    const claimKudo = async () => {
        setLoading(true);
        try {
            const res = await axios.post('/api/mint', {
                metadata: JSON.parse(Kudos).metadata,
                receiver: publicKey.toString(),
            });
            setUrl(res.data.txnUrl);
            onOpen();
        } catch (error) {
            toast.error('Failed while claiming kudo');
        }
        setLoading(false);
    };

    return (
        <Layout>
            <ClaimedKudoModal
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                url={url}
            />
            <Flex
                alignItems="center"
                bgColor="rgba(15, 15, 16, 0.57)"
                direction="column"
                gap="4"
                h="75vh"
                justifyContent="center"
                rounded={8}
                w="28rem"
                zIndex={2}
            >
                <Image
                    alt={name}
                    height="72"
                    rounded="10"
                    src={image}
                    width="72"
                />

                <Text color="white" fontFamily="inter" fontSize="xl">
                    {name}
                </Text>

                <Text color="gray.300" fontFamily="inter" fontSize="md">
                    {description}
                </Text>

                <Button
                    disabled={!canMint()}
                    h="10"
                    isLoading={isLoading}
                    onClick={claimKudo}
                    w="36"
                >
                    Claim Kudo
                </Button>
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
