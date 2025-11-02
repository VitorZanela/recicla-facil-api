import { Test, TestingModule } from '@nestjs/testing';
import { PontoDescarteController } from './pontoDescarte.controller';

describe('DescarteController', () => {
  let controller: PontoDescarteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PontoDescarteController],
    }).compile();

    controller = module.get<PontoDescarteController>(PontoDescarteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
