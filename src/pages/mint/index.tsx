import Layout from '@/Layouts/Main.layout';
import StepOne from '@/components/Misc/Step1.component';
import StepTwo from '@/components/Misc/Step2.component';
import Steps from '@/components/Misc/Steps.component';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

const MintPage: NextPage = () => {
    const [step, setStep] = useState<number>(0);

    return (
        <Layout>
            <Box
                alignItems="center"
                backdropBlur="100px"
                bgGradient="linear(180deg, rgba(15, 15, 16, 0.65) 0%, rgba(15, 15, 16, 0.6) 100%)"
                display="flex"
                flexDir="column"
                gap="6"
                m="auto"
                position="absolute"
                px="8"
                py="8"
                rounded="8"
                w="48rem"
                zIndex="2"
            >
                <Steps step={step} />
                <StepOne
                    handleClick={() => setStep(1)}
                    vis={step === 0 && true}
                />

                <StepTwo vis={step === 1 && true} />
            </Box>
        </Layout>
    );
};

export default MintPage;
