import { envs } from './config/env.js'; 
// const { envs } = require('./config/env'); 

import { startServer } from './server/server.js';
// const { startServer } = require('./server/server');

const main = () => {
    console.log(envs);
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
};

(async () => {
    main();
})()
