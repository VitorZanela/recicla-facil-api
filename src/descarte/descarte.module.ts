import { Module } from '@nestjs/common';
import { DescarteController } from './descarte.controller';
import { DescarteService } from './descarte.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DescarteSchema } from './descarte.model';
import { PontoDescarteSchema } from 'src/pontoDescarte/pontoDescarte.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Descarte', schema: DescarteSchema },
    { name: 'PontoDescarte', schema: PontoDescarteSchema }
        ])],

  controllers: [DescarteController],
  providers: [DescarteService]
})
export class DescarteModule {}
