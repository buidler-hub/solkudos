import * as anchor from '@project-serum/anchor';
import { transfer, TOKEN_PROGRAM_ID } from '@solana/spl-token';

async function transferNft(
    wallet: anchor.web3.Signer,
    connection: anchor.web3.Connection,
    amount: number,
    receiver: anchor.web3.PublicKey,
    from: anchor.web3.PublicKey,
) {
    try {
        const transfer_trx = await transfer(
            connection,
            wallet,
            from,
            receiver,
            wallet,
            amount,
            [wallet],
            undefined,
            TOKEN_PROGRAM_ID,
        );

        return transfer_trx;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export default transferNft;
