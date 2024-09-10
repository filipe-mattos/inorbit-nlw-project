# Pacotes npm utilizados no backend
 - Fastify - framework para o backend
 - Biome - ferramenta concorrente do eslint feita em rust
 - Drizzle-orm - pacote para manipular sql
 - Zod - biblioteca para validacao de dados
 - postgres - drive para utilizar o db postgres
 - paralleldrive - utilizando o cuid2 como algoritimo de geracao de ids unicos
 - dayjs - biblioteca para manipular melhor as datas
 - 
# Ferramentas utilizadas
 - Docker - utilizando um container para rodar o postgresql

# Comandos Importantes
 - Drizzle-kit
   - generate - comando para apos configurado o schema do banco gerar a migration
   - migrate - comando para rodar a migration e criar a tabela e alteracoes no banco
   - studio - comando para abrir a interface do banco pelo propio drizzle

# Configuracoes de arquivos
    - drizzle
        - drizzle.config.ts - arquivo das configuracoes do banco de dados expl:

 ```
    import { defineConfig } from 'drizzle-kit'
    import { env } from './src/env'
    
    export default defineConfig({
        schema: './src/db/schema/schema.ts',
        out: './.migrations',
        dialect: 'banco-de-dados',
        dbCredentials: {
            url: database-url,
        },
    })
 ```
    