interface createdModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    id?: string;
}

interface claimedModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    url?: string;
}

export type { createdModalProps, claimedModalProps };
