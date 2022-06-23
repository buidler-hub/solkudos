import { Box, ChakraProps } from '@chakra-ui/react';
import { FC } from 'react';

const Blob: FC<ChakraProps> = ({ bg, ...otherProps }) => {
    return (
        <Box
            bg={bg}
            filter="blur(200px)"
            h={{ base: '52', md: '72' }}
            margin="auto"
            position="absolute"
            rounded="full"
            w={{ base: '60', md: '96' }}
            {...otherProps}
        ></Box>
    );
};

export default Blob;
