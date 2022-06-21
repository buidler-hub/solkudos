import { Flex, Link } from '@chakra-ui/react';
import { NextComponentType } from 'next';

const TextLinks: NextComponentType = () => {
    return (
        <Flex
            dir="row"
            gap="4"
            alignItems="center"
            fontSize="sm"
            textColor="gray.200"
        >
            <Link>Home</Link>
            <Link>App</Link>
            <Link>Discord</Link>
            <Link>GitHub</Link>
        </Flex>
    );
};

export default TextLinks;
