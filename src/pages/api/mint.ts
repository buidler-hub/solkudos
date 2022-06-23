import mintReqSchema from '@/schemas/mintReqSchema';
import transferNft from '@/utils/transferNft';
import { keypairIdentity, Metaplex } from '@metaplex-foundation/js';
import {
    ASSOCIATED_TOKEN_PROGRAM_ID,
    getOrCreateAssociatedTokenAccount,
    TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import {
    Cluster,
    clusterApiUrl,
    Connection,
    Keypair,
    PublicKey,
} from '@solana/web3.js';
import type { NextApiRequest, NextApiResponse } from 'next';

const uploadToArweave = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { metadata, receiver } = await mintReqSchema.validate(req.body);

        try {
            const connection = new Connection(
                clusterApiUrl(process.env.NETWORK as Cluster),
            );
            const metaplex = new Metaplex(connection);

            const keypair = Keypair.fromSecretKey(
                Buffer.from(JSON.parse(process.env.SOLANA_KEYPAIR!.toString())),
            );

            metaplex.use(keypairIdentity(keypair));

            const txn = await metaplex.nfts().create({
                uri: metadata,
            });

            const tokenMintAddress = new PublicKey(
                txn.nft.metadataAccount.data.mint.toString(),
            );

            const receiverAddress = new PublicKey(receiver);

            const myTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection,
                keypair,
                tokenMintAddress,
                keypair.publicKey,
                false,
                'finalized',
                undefined,
                TOKEN_PROGRAM_ID,
                ASSOCIATED_TOKEN_PROGRAM_ID,
            );

            const receiverTokenAccount =
                await getOrCreateAssociatedTokenAccount(
                    connection,
                    keypair,
                    tokenMintAddress,
                    receiverAddress,
                    false,
                    'finalized',
                    undefined,
                    TOKEN_PROGRAM_ID,
                    ASSOCIATED_TOKEN_PROGRAM_ID,
                );

            const txnSig = await transferNft(
                keypair,
                connection,
                1,
                receiverTokenAccount.address,
                myTokenAccount.address,
            );

            return res.status(200).json({
                txnSig,
                txnUrl: `https://explorer.solana.com/tx/${txnSig}?cluster=${process.env.NETWORK}`,
            });
        } catch (err) {
            return res.status(500).json({
                message: 'An error while minting the NFT',
                error: err,
            });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
};

export default uploadToArweave;
