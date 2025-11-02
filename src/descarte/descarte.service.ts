import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Descarte } from './descarte.model';
import { PontoDescarte } from '../pontoDescarte/pontoDescarte.model';

@Injectable()
export class DescarteService {
    constructor( @InjectModel('Descarte') private readonly descarteModel: Model<Descarte>,
                @InjectModel('PontoDescarte') private readonly pontoDescarteModel: Model<PontoDescarte>){}
    

    async createDescarte(descarte: Descarte){
        const descarteModel = new this.descarteModel(
            {
                nomeUsuario: descarte.nomeUsuario,
                idPontoDescarte: descarte.idPontoDescarte,
                tipoResiduo: descarte.tipoResiduo,
                data: descarte.data
            }
        );
        const result = await descarteModel.save();
        
        const populatedResult = await this.descarteModel.findById(result.id)
            .populate('idPontoDescarte')
            .exec();
        
        return populatedResult;
    }

    async readDescarte(){
        const descarte = await this.descarteModel.find().populate('idPontoDescarte').exec();
        return descarte;
    }

    async updateDescarte(id: string, descarte: Descarte){
        const updateDescarte = await this.descarteModel.findOne({_id: id});
        if (!updateDescarte){
            throw new NotFoundException('Ponto de descarte nao encontrado.');
        }
        if (descarte.nomeUsuario){
            updateDescarte.nomeUsuario = descarte.nomeUsuario
        }
        if (descarte.tipoResiduo){
            updateDescarte.tipoResiduo = descarte.tipoResiduo
        }
        updateDescarte.save()
    }

    async deleteDescarte(id: string){
        const resul = await this.descarteModel.deleteOne({_id: id}).exec();
        if (resul.deletedCount === 0) {
        throw new NotFoundException('Descarte não encontrado');
        }

        return resul;

    }



    async getRelatorio() {
    // Todas as agregações em paralelo
    const [
        localMaisRegistros,
        residuoMaisFrequente,
        totalUsuarios,
        totalPontosDescarte,
        totalDescartes
    ] = await Promise.all([
        // Local com maior número de registros
        this.descarteModel.aggregate([
            { $group: { _id: '$idPontoDescarte', total: { $sum: 1 } } },
            { $sort: { total: -1 } },
            { $limit: 1 },
            {
                $lookup: {
                    from: 'pontodescartes',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'pontoDescarte'
                }
            },
            { $unwind: '$pontoDescarte' }
        ]),

        // Tipo de resíduo mais frequente
        this.descarteModel.aggregate([
            { $group: { _id: '$tipoResiduo', total: { $sum: 1 } } },
            { $sort: { total: -1 } },
            { $limit: 1 }
        ]),

        // Total de usuários únicos
        this.descarteModel.distinct('nomeUsuario'),

        // Total de pontos de descarte
        this.pontoDescarteModel.countDocuments(),
    

        // Total geral de descartes
        this.descarteModel.countDocuments()
    ]);

    // Média simples baseada em todos os dados
    const mediaDescartes = totalDescartes > 0 ? Math.round(totalDescartes / 30) : 0;

    return {
        localMaisRegistros: {
            local: localMaisRegistros[0]?.pontoDescarte?.nomeLocal || 'Nenhum registro',
            total: localMaisRegistros[0]?.total || 0
        },
        residuoMaisFrequente: {
            tipo: residuoMaisFrequente[0]?._id || 'Nenhum registro',
            total: residuoMaisFrequente[0]?.total || 0
        },
        mediaDescartesPorDia: mediaDescartes,
        totalUsuarios: totalUsuarios.length,
        totalPontosDescarte: totalPontosDescarte,
        totalDescartes: totalDescartes,
        percentualCrescimento: 0 // Simplesmente 0 para simplificar
    };
}
}
