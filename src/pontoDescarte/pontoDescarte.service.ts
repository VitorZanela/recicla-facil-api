import { Injectable, NotFoundException } from '@nestjs/common';
import { PontoDescarte } from './pontoDescarte.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PontoDescarteService {
    constructor( @InjectModel('PontoDescarte') private readonly pontoDescarteModel: Model<PontoDescarte>){}

    async createPontoDescarte(pontoDescarte: PontoDescarte){
        const pontoDescarteModel = new this.pontoDescarteModel(
            {
                nomeLocal: pontoDescarte.nomeLocal,
                bairro: pontoDescarte.bairro,
                tipoLocal: pontoDescarte.tipoLocal,
                categoriasResiduos: pontoDescarte.categoriasResiduos,
                localizacao: pontoDescarte.localizacao
            
            }
        );
        const result = await pontoDescarteModel.save();
        return result.id as string;
    }

    async readPontoDescarte(){
        const pontoDescarte = await this.pontoDescarteModel.find().exec();
        return pontoDescarte;
    }

    async updatePontoDescarte(id: string, pontoDescarte: PontoDescarte){
        const updatePontoDescarte = await this.pontoDescarteModel.findOne({_id: id});
        if (!updatePontoDescarte){
            throw new NotFoundException('Ponto de descarte nao encontrado.');
        }
        if (pontoDescarte.nomeLocal){
            updatePontoDescarte.nomeLocal = pontoDescarte.nomeLocal
        }
        if (pontoDescarte.bairro){
            updatePontoDescarte.bairro = pontoDescarte.bairro
        }
        if (pontoDescarte.tipoLocal){
            updatePontoDescarte.tipoLocal = pontoDescarte.tipoLocal
        }
        if (pontoDescarte.categoriasResiduos){
            updatePontoDescarte.categoriasResiduos = pontoDescarte.categoriasResiduos
        }
        if (pontoDescarte.localizacao){
            updatePontoDescarte.localizacao = pontoDescarte.localizacao
        }
        updatePontoDescarte.save()
    }

    async deletePontoDescarte(id: string){
        const resul = await this.pontoDescarteModel.deleteOne({_id: id}).exec();
        if (resul.deletedCount === 0) {
            throw new NotFoundException('Ponto de descarte não encontrado');
        }

        return resul;

    }
}
