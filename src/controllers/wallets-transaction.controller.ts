import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {WalletsTransaction} from '../models';
import {WalletsTransactionRepository} from '../repositories';

export class WalletsTransactionController {
  constructor(
    @repository(WalletsTransactionRepository)
    public walletsTransactionRepository : WalletsTransactionRepository,
  ) {}

  @post('/wallets-transactions')
  @response(200, {
    description: 'WalletsTransaction model instance',
    content: {'application/json': {schema: getModelSchemaRef(WalletsTransaction)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WalletsTransaction, {
            title: 'NewWalletsTransaction',
            exclude: ['id'],
          }),
        },
      },
    })
    walletsTransaction: Omit<WalletsTransaction, 'id'>,
  ): Promise<WalletsTransaction> {
    return this.walletsTransactionRepository.create(walletsTransaction);
  }

  @get('/wallets-transactions/count')
  @response(200, {
    description: 'WalletsTransaction model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WalletsTransaction) where?: Where<WalletsTransaction>,
  ): Promise<Count> {
    return this.walletsTransactionRepository.count(where);
  }

  @get('/wallets-transactions')
  @response(200, {
    description: 'Array of WalletsTransaction model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WalletsTransaction, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WalletsTransaction) filter?: Filter<WalletsTransaction>,
  ): Promise<WalletsTransaction[]> {
    return this.walletsTransactionRepository.find(filter);
  }

  @patch('/wallets-transactions')
  @response(200, {
    description: 'WalletsTransaction PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WalletsTransaction, {partial: true}),
        },
      },
    })
    walletsTransaction: WalletsTransaction,
    @param.where(WalletsTransaction) where?: Where<WalletsTransaction>,
  ): Promise<Count> {
    return this.walletsTransactionRepository.updateAll(walletsTransaction, where);
  }

  @get('/wallets-transactions/{id}')
  @response(200, {
    description: 'WalletsTransaction model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WalletsTransaction, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WalletsTransaction, {exclude: 'where'}) filter?: FilterExcludingWhere<WalletsTransaction>
  ): Promise<WalletsTransaction> {
    return this.walletsTransactionRepository.findById(id, filter);
  }

  @patch('/wallets-transactions/{id}')
  @response(204, {
    description: 'WalletsTransaction PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WalletsTransaction, {partial: true}),
        },
      },
    })
    walletsTransaction: WalletsTransaction,
  ): Promise<void> {
    await this.walletsTransactionRepository.updateById(id, walletsTransaction);
  }

  @put('/wallets-transactions/{id}')
  @response(204, {
    description: 'WalletsTransaction PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() walletsTransaction: WalletsTransaction,
  ): Promise<void> {
    await this.walletsTransactionRepository.replaceById(id, walletsTransaction);
  }

  @del('/wallets-transactions/{id}')
  @response(204, {
    description: 'WalletsTransaction DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.walletsTransactionRepository.deleteById(id);
  }
}
