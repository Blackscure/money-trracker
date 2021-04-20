import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDsDataSource} from '../datasources';
import {Wallets, WalletsRelations} from '../models';

export class WalletsRepository extends DefaultCrudRepository<
  Wallets,
  typeof Wallets.prototype.walletId,
  WalletsRelations
> {
  constructor(
    @inject('datasources.postgresDs') dataSource: PostgresDsDataSource,
  ) {
    super(Wallets, dataSource);
  }
}
