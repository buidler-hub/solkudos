import { Header, Sidebar } from '@/components';
import Blob from '@/components/Landing/Blob';
import {
    Input,
    Flex,
    Checkbox,
    Button,
    Spinner,
    Text,
    Box,
} from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const defaultValues = {
    title: '',
    description: '',
    isPublic: false,
    whitelistedPublicKeys: [],
    base64: '',
};

const Home: NextPage = () => {
    const { register, handleSubmit, setValue, getValues, reset } = useForm({
        defaultValues,
    });

    const { publicKey } = useWallet();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            const binaryStr = reader.result as string;
            setValue('base64', binaryStr);
        };
        reader.readAsDataURL(file);
    }, []);

    // eslint-disable-next-line no-unused-vars
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    const onSubmit = async data => {
        setIsLoading(true);
        try {
            const response = await axios.post('/api/upload', {
                ...data,
                creator: publicKey,
                whitelistedPublicKeys: [publicKey],
                base64: data.base64.split('data:image/jpeg;base64,')[1],
            });

            reset({ ...defaultValues });
            setIsLoading(false);
            toast.success('Upload successful!');
            router.push(`/mint/${response.data.kudos.id}`);
        } catch (error) {
            setIsLoading(false);
            toast.error('Upload failed!');
        }
    };

    const inputStyles = {
        my: '2',
        background: 'rgba(0, 0, 0, 0.3)',
        rounded: 'lg',
        border: 'none',
        color: 'white',
        _placeholder: {
            color: 'gray.400',
        },
        fontSize: 'lg',
        px: '6',
    };

    return (
        <Box
            alignItems="center"
            bgColor="body"
            display="flex"
            justifyContent="center"
            minH="100vh"
            overflowX="hidden"
            textAlign="center"
            w="100vw"
        >
            <Header />
            <Sidebar />
            <Blob bg="#9333EA" h="371px" left="20" w="426px" zIndex="0" />
            <Blob bg="#DB2777" h="371px" right="20" w="426px" zIndex="0" />
            <Flex
                align="center"
                backdropFilter="blur(100px)"
                background="linear-gradient(180deg, rgba(15, 15, 16, 0.4) 0%, rgba(15, 15, 16, 0.4) 100%)"
                borderRadius="8px"
                boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)"
                justify="space-around"
                p="8"
                w="60vw"
                zIndex="2"
            >
                <Flex
                    align="center"
                    bg="#0F0F10"
                    flexDir="column"
                    h="350px"
                    justify="center"
                    minW="350px"
                    pos="relative"
                    rounded="lg"
                >
                    <Text
                        align="center"
                        background="linear-gradient(90deg, #EC008C 0%, #FC6767 100%)"
                        backgroundClip="text"
                        color="transparent"
                        fontSize="64px"
                        fontStyle="italic"
                        fontWeight="800"
                        lineHeight="77px"
                        transform="rotate(-15.76deg)"
                    >
                        CARD THINGY
                    </Text>
                </Flex>

                <Flex
                    alignItems="center"
                    flexDir="column"
                    onSubmit={handleSubmit(onSubmit)}
                    p="8"
                    w="100%"
                >
                    <Input
                        placeholder="Title"
                        {...register('title')}
                        {...inputStyles}
                    />
                    <Input
                        placeholder="Description"
                        {...register('description')}
                        {...inputStyles}
                    />

                    <Checkbox
                        checked={getValues('isPublic')}
                        color="white"
                        onChange={e => setValue('isPublic', e.target.checked)}
                    >
                        Public
                    </Checkbox>

                    <Button mt="10" onClick={handleSubmit(onSubmit)} w="full">
                        {isLoading ? <Spinner /> : 'Mint Kudos'}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Home;
