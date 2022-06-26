import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { modalProps } from 'types/modalProps.types';

const CreatedKudoModal: NextComponentType<NextPageContext, {}, modalProps> = ({
    isOpen,
    onClose,
    id,
}) => {
    const router = useRouter();

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} onEsc={onClose}>
            <ModalOverlay />
            <ModalContent
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                as={motion.div}
                bgColor="rgba(0, 0, 0, 0.7)"
                initial={{
                    opacity: 0,
                    y: -200,
                }}
            >
                <ModalHeader textAlign="center" textColor="gray.100">
                    Kudo Created!
                </ModalHeader>
                <ModalCloseButton _active={{}} _focus={{}} />
                <ModalBody
                    alignItems="center"
                    display="flex"
                    flexDir="column"
                    fontFamily="inter"
                    gap="6"
                    justifyContent="center"
                    pb="6"
                    textAlign="center"
                    textColor="white"
                >
                    <Text fontSize="lg" fontWeight="500">
                        Kudo created successfully
                    </Text>

                    <Button
                        fontSize="lg"
                        h="10"
                        onClick={() => router.push('mint/' + id)}
                        w="24"
                    >
                        Visit
                    </Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CreatedKudoModal;
