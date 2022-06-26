import { Header, Sidebar } from '@/components';
import Blob from '@/components/Landing/Blob';
import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface ILayoutProps {
    children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <Box
            alignItems="center"
            bgColor="body"
            display="flex"
            justifyContent="center"
            minH="100vh"
            overflowX="hidden"
            textAlign="center"
            w="100vw"
        >
            {children}
            <Header />
            <Sidebar />
            <Blob bg="purple.600" left="0" zIndex="0" />
            <Blob bg="pink.600" right="0" zIndex="0" />
        </Box>
    );
};

export default Layout;
