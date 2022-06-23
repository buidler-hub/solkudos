import { Button } from './components';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        body: '#060607',
    },
    fonts: {
        body: '"Inter", sans-serif',
        heading: '"Inter", sans-serif',
    },
    components: {
        Button,
    },
});

export default theme;
