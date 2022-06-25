import { Flex, Image, Text } from '@chakra-ui/react';

const MintCard = ({ title, desc }) => {
    return (
        <Flex
            align="center"
            bg="#0F0F10"
            className="mintCard"
            flexDir="column"
            h="350px"
            justify="center"
            minW="350px"
            overflow="hidden"
            pos="relative"
            rounded="lg"
        >
            <Flex
                alignItems="center"
                bgColor="rgba(15, 15, 16, 0.4)"
                bgImage="url(/assets/kudoBg.svg)"
                bgSize="cover"
                direction="column"
                gap="2"
                h="64"
                justifyContent="center"
                m="auto"
                pos="absolute"
                rounded="4"
                w="64"
                zIndex={2}
            >
                <Image
                    alt="champagne yum"
                    h="24"
                    src="/assets/champagne.svg"
                    w="24"
                />

                <Text fontSize="xl" textAlign="center" textColor="white">
                    {title}
                </Text>

                <Text fontSize="md" textAlign="center" textColor="gray.300">
                    {desc}
                </Text>
            </Flex>
        </Flex>
    );
};

export default MintCard;
