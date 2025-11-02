import { Test, TestingModule } from '@nestjs/testing';
import { PontoDescarteService } from './pontoDescarte.service';

describe('DescarteService', () => {
  let service: PontoDescarteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PontoDescarteService],
    }).compile();

    service = module.get<PontoDescarteService>(PontoDescarteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
