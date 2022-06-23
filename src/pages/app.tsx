import Layout from '../Layouts/Main.layout';
import {
    Input,
    chakra,
    Flex,
    Checkbox,
    Button,
    Spinner,
    Text,
} from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import { NextPage } from 'next';
import Image from 'next/image';
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
        bg: 'white',
        my: '2',
    };

    return (
        <Layout>
            <Flex align="center" justify="space-around" w="100vw" zIndex="2">
                <chakra.form flexDir="column" onSubmit={handleSubmit(onSubmit)}>
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

                    <Button mt="10" onClick={handleSubmit(onSubmit)}>
                        {isLoading ? <Spinner /> : 'Submit'}
                    </Button>
                </chakra.form>
                <Flex
                    align="center"
                    bg="blue.900"
                    flexDir="column"
                    h="96"
                    justify="center"
                    pos="relative"
                    rounded="lg"
                    w="96"
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    {getValues('base64') ? (
                        <Image
                            alt="uploaded"
                            layout="fill"
                            src={getValues('base64')}
                        />
                    ) : (
                        <Text color="white">
                            Drag and drop a file here or click to select a file
                        </Text>
                    )}
                </Flex>
            </Flex>
        </Layout>
    );
};

export default Home;
