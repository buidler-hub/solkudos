import Layout from '@/Layouts/Main.layout';
import StepOne from '@/components/Misc/Step1.component';
import StepTwo from '@/components/Misc/Step2.component';
import Steps from '@/components/Misc/Steps.component';
import { Box } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IFormValues } from 'types/mintFormTypes';

const defaultValues: IFormValues = {
    title: '',
    description: '',
    isPublic: false,
    whitelistedPublicKeys: [],
    base64: '',
};

const MintPage: NextPage = () => {
    const [step, setStep] = useState<number>(0);

    const { register, handleSubmit, setValue, getValues, reset } = useForm({
        defaultValues,
    });

    const { publicKey } = useWallet();
    const router = useRouter();

    const onSubmit = async data => {
        try {
            const response = await axios.post('/api/upload', {
                ...data,
                creator: publicKey,
                whitelistedPublicKeys: [publicKey],
                base64: data.base64.split('data:image/jpeg;base64,')[1],
            });

            reset({ ...defaultValues });
            toast.success('Upload successful!');
            router.push(`/mint/${response.data.kudos.id}`);
        } catch (error) {
            toast.error('Upload failed!');
        }
    };

    return (
        <Layout>
            <Box
                alignItems="center"
                display="flex"
                flexDir="column"
                gap="6"
                justifyContent="center"
                textAlign="center"
            >
                <Steps setStep={setStep} step={step} />
                <Box
                    alignItems="center"
                    backdropBlur="100px"
                    bgGradient="linear(180deg, rgba(15, 15, 16, 0.4) 0%, rgba(15, 15, 16, 0.4) 100%)"
                    display="flex"
                    flexDir="column"
                    gap="6"
                    m="auto"
                    px="8"
                    py="8"
                    rounded="8"
                    w="50rem"
                    zIndex="2"
                >
                    <StepOne
                        getValues={getValues}
                        handleClick={() => {
                            if (getValues('isPublic')) {
                                handleSubmit(onSubmit);
                            }
                            setStep(1);
                        }}
                        register={register}
                        setValue={setValue}
                        vis={step === 0 && true}
                    />

                    <StepTwo vis={step === 1 && true} />
                </Box>
            </Box>
        </Layout>
    );
};

export default MintPage;