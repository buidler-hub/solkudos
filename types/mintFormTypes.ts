interface IFormValues {
    title: string;
    description: string;
    isPublic: boolean;
    whitelistedPublicKeys: string[];
    base64: string;
}

export type { IFormValues };
