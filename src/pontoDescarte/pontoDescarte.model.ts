import * as mongoose from 'mongoose';

export const PontoDescarteSchema = new mongoose.Schema({
    nomeLocal: {type: String, required: true},
    bairro: {type: String, required: true},
    tipoLocal: {type: String, required: true},
    categoriasResiduos: {type: String, required: true},
    localizacao: {type: String, required: true}
    
})

export interface PontoDescarte extends mongoose.Document{
    id: string;
    nomeLocal: string;
    bairro: string;
    tipoLocal: string;
    categoriasResiduos: string;
    localizacao: string;
}