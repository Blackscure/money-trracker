import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDsDataSource} from '../datasources';
import {WalletsTransaction, WalletsTransactionRelations} from '../models';

export class WalletsTransactionRepository extends DefaultCrudRepository<
  WalletsTransaction,
  typeof WalletsTransaction.prototype.transactionid,
  WalletsTransactionRelations
> {
  constructor(
    @inject('datasources.postgresDs') dataSource: PostgresDsDataSource,
  ) {
    super(WalletsTransaction, dataSource);
  }
}
