# ♻️ Sistema de Gestão de Descarte de Resíduos

Sistema de gerenciamento de pontos de descarte e registro de descarte de resíduos desenvolvido para um projeto de estudo.

## 🚀 Tecnologias Utilizadas

- **NestJS** - Framework Node.js
- **TypeScript** - Linguagem de programação
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **MongoDB Cloud** - Banco em nuvem

## 📋 Funcionalidades

### 🗑️ Módulo de Descarte
- ✅ Criar registro de descarte
- ✅ Listar todos os descartes
- ✅ Atualizar descarte
- ✅ Deletar descarte

### 📍 Módulo de Ponto de Descarte
- ✅ CRUD completo de pontos de descarte
- ✅ Gestão de locais de coleta

### 📊 Relatórios
- ✅ Relatório estatístico público
- ✅ Local com mais descartes
- ✅ Resíduo mais frequente
- ✅ Métricas gerais do sistema

## 🏗️ Estrutura do Projeto
```
src/
├── descarte/
│ ├── descarte.controller.ts 
│ ├── descarte.service.ts 
│ ├── descarte.module.ts 
│ └── descarte.model.ts 
├── pontoDescarte/
│ ├── pontoDescarte.controller.ts
│ ├── pontoDescarte.service.ts
│ ├── pontoDescarte.module.ts
│ └── pontoDescarte.model.ts
├── app.module.ts 
├── app.service.ts
├── app.controller.ts
└── main.ts 
```
## 📝 Modelos de Dados

### Descarte
```
{
  nomeUsuario: string;
  idPontoDescarte: ObjectId;      // Referência ao ponto
  tipoResiduo: string;
  data: Date;                     // Data automática
}
```

### PontoDescarte
```
{
  nomeLocal: string;
  bairro: string;
  tipoLocal: string;
  categoriasResiduos: string;
  localizacao: string;
}
```
## 🛣️ Rotas da API
### Descarte
- GET /descarte - Listar todos os descartes

- POST /descarte - Criar descarte

- PATCH /descarte/:id - Atualizar descarte

- DELETE /descarte/:id - Deletar descarte

### Descarte
- GET /pontoDescarte - Listar pontos

- POST /pontoDescarte - Criar ponto

- PATCH /pontoDescarte/:id - Atualizar ponto

- DELETE /pontoDescarte/:id - Deletar ponto

### Relatórios
- GET /descarte/relatorio - Estatísticas do sistema

## 🚀 Como Executar
#### 1. Instalar dependências:

```
npm install
```
#### 2. Configurar variáveis de ambiente:
```
#O projeto usa MongoDB Atlas configurado diretamente no código
```
#### 3. Executar em desenvolvimento:
```
npm run start:dev
```
#### 4. Acessar a API:
```
http://localhost:3000
```
## 📊 Exemplo de Uso
### Criar ponto de descarte:
```
POST /pontoDescarte
{
  "nomeLocal": "Parque Central",
  "bairro": "Centro",
  "tipoLocal": "Público",
  "categoriasResiduos": "Recicláveis",
  "localizacao": "Av. Principal, 123"
}
```
### Registrar descarte:
```
POST /descarte
{
  "nomeUsuario": "João Silva",
  "idPontoDescarte": "507f1f77bcf86cd799439011",
  "tipoResiduo": "Plástico"
}
```
### Relatório:
```
POST /descarte/relatoio
{
    "localMaisRegistros": {
        "local": "Ponto de Descarte Mamagaya",
        "total": 2
    },
    "residuoMaisFrequente": {
        "tipo": "Entulho",
        "total": 2
    },
    "mediaDescartesPorDia": 0,
    "totalUsuarios": 3,
    "totalPontosDescarte": 3,
    "totalDescartes": 4,
    "percentualCrescimento": 0
}
```

## 🔗 Relacionamentos
- Descarte → PontoDescarte (Referência por ObjectId)
- Populate automático para trazer dados completos do ponto

## 📈 Funcionalidades Avançadas
- Populate automático - Dados completos em consultas
- Agregações MongoDB - Relatórios complexos
- Tratamento de erros - Respostas padronizadas
- Validação de dados - Schemas MongoDB

## 👨‍💻 Desenvolvido por
Vitor Zanela - Projeto de gestão ambiental (WebMobile (Aula 7) - Universidade Presbiteriana Mackenzie)
