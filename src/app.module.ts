import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DescarteModule } from './descarte/descarte.module';
import { PontoDescarteModule } from './pontoDescarte/pontoDescarte.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PontoDescarteModule, 
    DescarteModule, 
    MongooseModule.forRoot('mongodb+srv://<Seu_Usuario>:<Sua_Senha>@clusteraulawebmobile.uwoyif6.mongodb.net/?appName=<Seu_Cluster>')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
