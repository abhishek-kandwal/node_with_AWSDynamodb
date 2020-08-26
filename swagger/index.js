const swaggerOptions = {
    swaggerDefinition: {
        info : {
            title: 'Swagger',
            description: 'OTT-CMS',
            version: '1.0.0'
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http','https'],
        securityDefinitions:{
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: ''
            }
        }
    },
    basedir: __dirname,
    files: [ '../routes/**.js']
};

module.exports = swaggerOptions;