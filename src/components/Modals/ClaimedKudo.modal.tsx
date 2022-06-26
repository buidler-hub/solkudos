import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NextComponentType, NextPageContext } from 'next';
import { BiLinkExternal } from 'react-icons/bi';
import { claimedModalProps } from 'types/modalProps.types';

const CreatedKudoModal: NextComponentType<
    NextPageContext,
    {},
    claimedModalProps
> = ({ isOpen, onClose, url }) => {
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
                    Kudo Claimed!
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
                        Kudo claimed successfully
                    </Text>
                    <Link
                        alignItems="center"
                        display="flex"
                        fontWeight="500"
                        gap="2"
                        href={url}
                        isExternal
                        textColor="pink.400"
                        zIndex={50}
                    >
                        See Txn on solana explorer <BiLinkExternal />
                    </Link>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CreatedKudoModal;
