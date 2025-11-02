import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { PontoDescarteService } from './pontoDescarte.service';
import type { PontoDescarte } from './pontoDescarte.model';

@Controller('ponto_descarte')
export class PontoDescarteController {
    constructor(private readonly pontoDescarteService: PontoDescarteService){}

    @Get()
    readAllPontoDescate(): Promise<any>{
        return this.pontoDescarteService.readPontoDescarte();
    }

    @Post()
    async createPontoDescarte(@Body() pontoDescarte: PontoDescarte): Promise<any>{
        var response = await this.pontoDescarteService.createPontoDescarte(pontoDescarte);
        return {
                message: 'Ponto de descarte criado com sucesso',
                id: response
            };
    }

    @Patch(':id')
    async updatePontoDescarte(
        @Param('id') id: string,
        @Body() pontoDescarte: PontoDescarte
    ){
        await this.pontoDescarteService.updatePontoDescarte(id, pontoDescarte);
        return { message: 'Ponto de descarte atualizado com sucesso' };
    }

    @Delete(':id')
    async deletePontoDescarte(@Param('id') id: string){
        await this.pontoDescarteService.deletePontoDescarte(id);
        return { message: 'Ponto de descarte deletado com sucesso' };
    }
}
