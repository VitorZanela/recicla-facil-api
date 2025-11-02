import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { DescarteService } from './descarte.service';
import type { Descarte } from './descarte.model';


@Controller('descarte')
export class DescarteController {
    constructor(private readonly descarteService: DescarteService){}

    @Get()
    readAllDescate(): Promise<any>{
        return this.descarteService.readDescarte();
    }

    @Post()
    async createDescarte(@Body() descarte: Descarte): Promise<any>{
        var response = await this.descarteService.createDescarte(descarte);
        return {
                message: 'Ponto de descarte criado com sucesso',
                id: response
            };
    }

    @Patch(':id')
    async updateDescarte(
        @Param('id') id: string,
        @Body() descarte: Descarte
    ){
        await this.descarteService.updateDescarte(id, descarte);
        return { message: 'Descarte atualizado com sucesso' };
    }

    @Delete(':id')
    async deleteDescarte(@Param('id') id: string){
        await this.descarteService.deleteDescarte(id);
        return { message: 'Descarte deletado com sucesso' };
    }

    @Get('relatorio') 
    async getRelatorio() {
        return await this.descarteService.getRelatorio();
    }
}
