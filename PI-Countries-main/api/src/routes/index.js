const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountryRoute = require('./paises')
//const ActivityRoute = require ('./actividades')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/', CountryRoute);
// router.use('./actividades', ActivityRoute);

module.exports = router;
