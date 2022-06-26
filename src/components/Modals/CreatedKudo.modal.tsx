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
            <ModalContent>
                <ModalHeader textAlign="center">Kudo Created!</ModalHeader>
                <ModalCloseButton _active={{}} _focus={{}} />
                <ModalBody
                    alignItems="center"
                    display="flex"
                    flexDir="column"
                    fontFamily="inter"
                    gap="6"
                    justifyContent="center"
                    textAlign="center"
                >
                    <Text fontSize="lg" fontWeight="500" textColor="black">
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
