import env from 'dotenv';
import ennvar from 'env-var';

env.config();

export const envs = {
    PORT: ennvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: ennvar.get('PUBLIC_PATH').default('public').asString()
};