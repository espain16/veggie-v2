// Update with your config settings.	
require("dotenv").config();	

module.exports = {	
  development: {	
    client: "mysql",	
    connection: {	
      host:"us-cdbr-iron-east-04.cleardb.net" ,	
      user:"b92a1eb08d112c",	
      password:"11e85633",	
      database:"heroku_b94342d9f046b8d",	
      insecureAuth : true,	
      charset: "utf8"	
    },	
    useNullAsDefault: true	
  },	

  // staging: {	
  //   client: "mysql",	
  //   connection: {	
  //     host: process.env.host,	
  //     user: process.env.user,	
  //     password: process.env.password,	
  //     database: "ig_clone",	
  //     charset: "utf8"	
  //   },	
  //   useNullAsDefault: true	
  // },	
  pool: {	
    min: 2,	
    max: 10	
  },	
  migrations: {	
    tableName: "knex_migrations"	
  },	

  // production: {	
  //   client: "mysql",	
  //   connection: {	
  //     host: process.env.host,	
  //     user: process.env.user,	
  //     password: process.env.password,	
  //     database: "ig_clone",	
  //     charset: "utf8"	
  //   },	
  //   useNullAsDefault: true,	
  //   pool: {	
  //     min: 2,	
  //     max: 10	
  //   },	
  //   migrations: {	
  //     tableName: "knex_migrations"	
  //   }	
  // }	

  // For local testing	
  // testing: {	
  //   client: "mysql",	
  //   connection: {	
  //     host: process.env.host,	
  //     user: process.env.user,	
  //     password: process.env.password,	
  //     database: "lambdaStaging",	
  //     charset: "utf8",	
  //   useNullAsDefault: true,	
  // }	
};