import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Wallets extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  walletId?: number;

  @property({
    type: 'string',
    required: true,
  })
  walletName: string;

  @property({
    type: 'number',
    required: true,
  })
  walletToatalInitialAmount: number;

  @property({
    type: 'string',
    required: true,
  })
  walletDescription: string;

  @property({
    type: 'number',
    required: true,
  })
  overallWalletsBalance: number;

  @property({
    type: 'number',
    required: true,
  })
  individualWalletBalance: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Wallets>) {
    super(data);
  }
}

export interface WalletsRelations {
  // describe navigational properties here
}

export type WalletsWithRelations = Wallets & WalletsRelations;
