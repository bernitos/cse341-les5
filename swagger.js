const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts API',
  },
  host: 'adja.onrender.com',
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

//Run server after it gets generated
//swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//  await import('./server.js');
//});
