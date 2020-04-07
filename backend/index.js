const express = require('express');
const cors = require('cors')
const routes = require('./src/routes');
const app = express();



app.use(cors());
app.use(routes)
app.use(express.json())
app.listen(3333);
/**
 * Método HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informç$ao do back-end
 * 
 * PUT: Alterar uma informação do back-end
 * DELETE: Deleta uma informão do back-end 
 * 
 */
/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados enviado na rota após o '?' (filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body:  Corpo da requisição, utilizado para criar recursos
 */

 /**
  * SQL: MySql, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CounchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Querry Builder: table('users').select('*')
   */
  
  
  