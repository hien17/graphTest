import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ApprovalForAllNft as ApprovalForAllNftEvent,
  Mint as MintEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
  TransferDetail as TransferDetailEvent,
  Withdraw as WithdrawEvent
} from "../generated/Contract/Contract"
import {
  Token
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {

}


export function handleMint(event: MintEvent): void {
  let token = Token.load(event.params._tokenId.toHexString());
  token!.tokenId = event.params._tokenId;
  token!.save();
}

export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toHexString());
  if (!token) {
    token = new Token(event.params.tokenId.toHexString());
  }
  token.tokenId = event.params.tokenId;
  token.owner = event.params.to;
  token.creator = event.params.from;
  token.traits = "";
  token.save();
}


