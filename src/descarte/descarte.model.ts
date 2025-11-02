import * as mongoose from 'mongoose';
import { PontoDescarte } from 'src/pontoDescarte/pontoDescarte.model';

export const DescarteSchema = new mongoose.Schema({
    nomeUsuario: {type: String, required: true},
    idPontoDescarte: {type: mongoose.Schema.Types.ObjectId, ref: 'PontoDescarte', required: true},
    tipoResiduo: {type: String, required: true},
    data: {type: Date, default: Date.now, required: true},

    
})

export interface Descarte extends mongoose.Document{
    nomeUsuario: String;
    idPontoDescarte: PontoDescarte;
    tipoResiduo: String;
    data: Date;
}