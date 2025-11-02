import { Module } from '@nestjs/common';
import { PontoDescarteController } from './pontoDescarte.controller';
import { PontoDescarteService } from './pontoDescarte.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PontoDescarteSchema } from './pontoDescarte.model';


@Module({
  imports: [MongooseModule.forFeature([{name: 'PontoDescarte', schema: PontoDescarteSchema}])],
  controllers: [PontoDescarteController],
  providers: [PontoDescarteService]
})
export class PontoDescarteModule {}
