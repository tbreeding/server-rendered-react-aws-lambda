import * as fs from 'fs';
import BaseEnv from './BaseEnv';

export interface ServerEnv extends BaseEnv {
}

const env : ServerEnv = JSON.parse(fs.readFileSync('./env.json').toString());

export default env;
