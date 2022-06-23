import type { ComponentStyleConfig } from '@chakra-ui/theme';

const disabledStyles = {
    bg: 'gray.200',
    color: 'gray.400',
    cursor: 'not-allowed',
};

const Button: ComponentStyleConfig = {
    baseStyle: {
        _disabled: disabledStyles,
        _hover: {
            _disabled: disabledStyles,
        },
        borderRadius: '5px',
    },

    variants: {
        primary: {
            _active: {
                bg: 'pink.400',
            },
            _focus: {},
            _hover: {
                bg: 'pink.600',
            },
            bg: 'pink.500',
            color: 'white',
            fontSize: 'lg',
            fontWeight: '500',
            h: '12',
            px: '8',
        },
    },

    defaultProps: {
        size: 'md',
        variant: 'primary',
    },
};

export { Button };
