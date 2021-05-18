import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class WalletsTransaction extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  transactionid?: number;

  @property({
    type: 'string',
    required: true,
  })
  transactionTitle: string;

  @property({
    type: 'string',
    required: true,
  })
  trransactionDescription: string;

  @property({
    type: 'number',
    required: true,
  })
  transactionAmount: number;

  @property({
    type: 'number',
    required: true,
  })
  walletId: number;

  @property({
    type: 'number',
    required: true,
  })
  walletadditionalIncome: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<WalletsTransaction>) {
    super(data);
  }
}

export interface WalletsTransactionRelations {
  // describe navigational properties here
}

export type WalletsTransactionWithRelations = WalletsTransaction & WalletsTransactionRelations;
