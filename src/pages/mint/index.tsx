import Layout from '@/Layouts/Main.layout';
import { CreatedKudoModal } from '@/components';
import StepOne from '@/components/Misc/Step1.component';
import StepTwo from '@/components/Misc/Step2.component';
import Steps from '@/components/Misc/Steps.component';
import { Box, useDisclosure } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import { NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IFormValues } from 'types/mintFormTypes';

const defaultValues: IFormValues = {
    title: '',
    description: '',
    isPublic: true,
    whitelistedPublicKeys: [],
    base64: '',
};

const MintPage: NextPage = () => {
    const [step, setStep] = useState<number>(0);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isLoading, setLoading] = useState<boolean>(false);
    const [id, setID] = useState<string>();

    const { register, handleSubmit, setValue, getValues, reset } = useForm({
        defaultValues,
    });

    const { publicKey } = useWallet();

    const onSubmit = async data => {
        onOpen();
        // setLoading(true);
        // if (publicKey) {
        //     try {
        //         const response = await axios.post('/api/upload', {
        //             ...data,
        //             creator: publicKey,
        //             whitelistedPublicKeys: data.isPublic
        //                 ? [publicKey]
        //                 : [
        //                       ...data.whitelistedPublicKeys.split(', '),
        //                       publicKey,
        //                   ],
        //             base64: data.base64.split('base64,')[1],
        //         });

        //         reset({ ...defaultValues });
        //         toast.success('Upload successful!');
        //         setID(response.data.kudos.id);
        //         onOpen();
        //     } catch (error) {
        //         toast.error('Upload Failed');
        //     }
        // } else {
        //     toast.error('Connect Wallet first');
        // }
        // setLoading(false);
    };

    const handleClick = async () => {
        if (getValues('title') !== '' && getValues('description') !== '') {
            setStep(1);

            const elem = document.querySelector('.mintCard');

            const dataURL = (
                await html2canvas(elem as HTMLElement)
            ).toDataURL();
            setValue('base64', dataURL);
        } else {
            toast.error('Fill in the values first');
        }
    };

    return (
        <Layout>
            <CreatedKudoModal
                id={id}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
            />
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
                        handleClick={handleClick}
                        register={register}
                        vis={step === 0}
                    />

                    <StepTwo
                        getValues={getValues}
                        handleClick={handleSubmit(onSubmit)}
                        isLoading={isLoading}
                        register={register}
                        setValue={setValue}
                        vis={step === 1}
                    />
                </Box>
            </Box>
        </Layout>
    );
};

export default MintPage;
